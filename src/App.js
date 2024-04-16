import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Billboard from './pages/Billboard/Billboard';
import RandomCoffee from './pages/RandomCoffee/RandomCoffee';
import Notifications from './pages/Notifications/Notifications';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
import useProfile from './providers/ProfileProvider/ProfileProvider.hook';
import {
  AUTH_ROUTE,
  BILLBOARD_ROUTE,
  EVENTS_ROUTE,
  FAVORITES_ROUTE,
  NOTIFICATIONS_ROUTE,
  PROFILE_ROUTE,
  RANDOM_COFFEE_ROUTE,
} from './utils/constants';
import EventRegistrationPopup from './components/Popup/EventRegistrationPopup/EventRegistrationPopup';
import useEvent from './providers/EventProvider/EventProvider.hook';
import Event from './pages/Event/Event';
import { Navigate, useNavigate } from 'react-router-dom';
import ConfirmPopup from './components/Popup/ConfrimPopup/ConfirmPopup';
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { isLoggedIn, setIsLoggedIn, getAllUserData } = useProfile();
  const { isEventRegistrationPopupOpen, isConfirmPopupOpen } = useEvent();
  useEffect(() => {
    checkToken();
    // disable eslint deps check, we use empty deps array beacause we need check token only once when app first loading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getAllUserData()
        .then(() => {
          navigate(pathname === AUTH_ROUTE ? BILLBOARD_ROUTE : pathname, {
            replace: true,
          });
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      {pathname !== AUTH_ROUTE && <Header />}
      <Routes>
        <Route index path={BILLBOARD_ROUTE} element={<Billboard />} />
        <Route path={EVENTS_ROUTE} element={<Navigate to={BILLBOARD_ROUTE} replace={true} />} />
        <Route path={EVENTS_ROUTE + '/:id'} element={<Event />} />
        <Route
          path={RANDOM_COFFEE_ROUTE}
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={RandomCoffee} />}
        />
        <Route
          path={NOTIFICATIONS_ROUTE}
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Notifications} />}
        />
        <Route path={FAVORITES_ROUTE} element={<Favorites />} />
        <Route
          path={PROFILE_ROUTE + '/*'}
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Profile} />}
        />
        <Route path={AUTH_ROUTE} element={<Auth />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {pathname === BILLBOARD_ROUTE && <Footer />}
      {isEventRegistrationPopupOpen && <EventRegistrationPopup />}
      {isConfirmPopupOpen && <ConfirmPopup />}
    </div>
  );
}

export default App;

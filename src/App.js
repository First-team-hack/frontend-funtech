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
import { AUTH_ROUTE } from './utils/constants';
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
          navigate(pathname === '/auth' ? '/' : pathname, {
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
        <Route index path="/" element={<Billboard />} />
        <Route path="/events" element={<Navigate to="/" replace={true} />} />
        <Route path="/events/:id" element={<Event />} />
        <Route
          path="/randomcoffee"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={RandomCoffee} />}
        />
        <Route
          path="/notifications"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Notifications} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/profile/*"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Profile} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {pathname === '/' && <Footer />}
      {isEventRegistrationPopupOpen && <EventRegistrationPopup />}
      {isConfirmPopupOpen && <ConfirmPopup />}
    </div>
  );
}

export default App;

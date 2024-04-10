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
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import useProfile from './providers/ProfileProvider/ProfileProvider.hook';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const { login, isLoggedIn } = useProfile();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Billboard />} />
        <Route
          path="/randomcoffee"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={RandomCoffee} />}
        />
        <Route
          path="/notifications"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Notifications} />}
        />
        <Route
          path="/favorites"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Favorites} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Profile} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {pathname === '/' && <Footer />}
    </div>
  );
}

export default App;

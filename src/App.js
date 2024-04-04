import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Billboard from './pages/Billboard/Billboard';
import RandomCoffee from './pages/RandomCoffee/RandomCoffee';
import Notifications from './pages/Notifications/Notifications';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Main} />} />
        <Route
          path="/afisha"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Billboard} />}
        />
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
    </div>
  );
}

export default App;

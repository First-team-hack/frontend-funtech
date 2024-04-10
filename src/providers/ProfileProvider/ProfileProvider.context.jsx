import { createContext } from 'react';

export default createContext({
  userInfo: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    workPlace: '',
    workExpirience: '',
    streamWatchHoursCount: 0,
  },
  isLoggedIn: false,
  login: () => {},
  logout: () => {},

  registeredEvents: [],
  getRegisteredEvents: () => {},
  registerToEvent: () => {},
  cancelRegistrationToEvent: () => {},

  favoriteEvents: [],
  getFavoriteEvents: () => {},
  addFavoriteEvent: () => {},
  deleteFavoriteEvent: () => {},
});

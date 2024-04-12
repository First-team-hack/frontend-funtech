import { createContext } from 'react';

export default createContext({
  userInfo: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    interest: '',
    notificationMethods: {
      telegram: false,
      whatsapp: false,
      vk: false,
      viber: false,
    },
    telegram: '',
    whatsapp: '',
    vk: '',
    viber: '',
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

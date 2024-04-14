import { createContext } from 'react';

export default createContext({
  userInfo: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    interest: '',
    notificationByTelegram: false,
    notificationByWhatsapp: false,
    notificationByVk: false,
    notificationByViber: false,
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

  recommendedEvents: [],
  getRecommendedEvents: () => {},
});

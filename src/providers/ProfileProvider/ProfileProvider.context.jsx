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
  setIsLoggedIn: () => {},
  getAllUserData: () => {},
  registeredEvents: [],
  registerToEvent: () => {},
  cancelRegistrationToEvent: () => {},

  favoriteEvents: [],
  addFavoriteEvent: () => {},
  deleteFavoriteEvent: () => {},

  recommendedEvents: [],

  newNotifications: [],
  watchedNotifications: [],
  addNewNotification: () => {},
  moveNotificationToWatched: () => {},
});

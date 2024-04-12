import { createContext } from 'react';

export default createContext({
  events: [],
  getEvents: () => {},
  currentEvent: {},
  setCurrent: () => {},
  isEventRegistrationPopupOpen: false,
  openEventRegistrationPopup: () => {},
  closeEventRegistrationPopup: () => {},
});

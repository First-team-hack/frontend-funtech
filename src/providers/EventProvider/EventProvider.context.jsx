import { createContext } from 'react';

export default createContext({
  events: [],
  getEvents: () => {},
  currentEvent: {},
  setCurrentEvent: () => {},
  isEventRegistrationPopupOpen: false,
  openEventRegistrationPopup: () => {},
  closeEventRegistrationPopup: () => {},
  isConfirmPopupOpen: false,
  openConfirmPopup: () => {},
  closeConfirmPopup: () => {},
});

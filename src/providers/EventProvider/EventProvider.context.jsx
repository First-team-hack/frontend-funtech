import { createContext } from 'react';

export default createContext({
  filteredEvents: [],
  getFilteredEvents: () => {},
  completedEvents: [],
  getCompletedEvents: () => {},
  currentEvent: {},
  setCurrentEvent: () => {},
  isEventRegistrationPopupOpen: false,
  openEventRegistrationPopup: () => {},
  closeEventRegistrationPopup: () => {},
  isConfirmPopupOpen: false,
  openConfirmPopup: () => {},
  closeConfirmPopup: () => {},
});

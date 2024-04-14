import { useState } from 'react';
import EventProviderContext from './EventProvider.context';
import { mockCardsData } from '../../utils/mock-data';

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isEventRegistrationPopupOpen, setIsEventRegistrationPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const openEventRegistrationPopup = (eventToRegister) => {
    setCurrentEvent(eventToRegister);
    setIsEventRegistrationPopupOpen(true);
  };
  const closeEventRegistrationPopup = () => {
    setCurrentEvent({});
    setIsEventRegistrationPopupOpen(false);
  };

  const openConfirmPopup = (eventToCanceledRegister) => {
    setCurrentEvent(eventToCanceledRegister);
    setIsConfirmPopupOpen(true);
  };
  const closeConfirmPopup = () => {
    setCurrentEvent({});
    setIsConfirmPopupOpen(false);
  };

  const getEvents = (filters) => {
    // get Events from server
    const allEvents = mockCardsData;
    //
    setEvents([...allEvents]);
  };

  const value = {
    events,
    getEvents,
    currentEvent,
    setCurrentEvent,
    isEventRegistrationPopupOpen,
    openEventRegistrationPopup,
    closeEventRegistrationPopup,
    isConfirmPopupOpen,
    openConfirmPopup,
    closeConfirmPopup,
  };

  return <EventProviderContext.Provider value={value}>{children}</EventProviderContext.Provider>;
};

export default EventProvider;

import { useState } from 'react';
import EventProviderContext from './EventProvider.context';
import { mockCardsData } from '../../utils/mock-data';

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isEventRegistrationPopupOpen, setIsEventRegistrationPopupOpen] = useState(false);

  const openEventRegistrationPopup = (event) => {
    setCurrentEvent(event);
    setIsEventRegistrationPopupOpen(true);
  };
  const closeEventRegistrationPopup = () => {
    setCurrentEvent({});
    setIsEventRegistrationPopupOpen(false);
  };

  const getEvents = () => {
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
  };

  return <EventProviderContext.Provider value={value}>{children}</EventProviderContext.Provider>;
};

export default EventProvider;

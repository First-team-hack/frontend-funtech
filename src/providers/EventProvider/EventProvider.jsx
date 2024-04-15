import { useState } from 'react';
import EventProviderContext from './EventProvider.context';
import { mockCardsData } from '../../utils/mock-data';

const EventProvider = ({ children }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);
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

  const getFilteredEvents = (filters) => {
    const keyword = filters?.keyword || '';
    const theme = filters?.theme || '';
    const city = filters?.city || '';
    const sortBy = filters?.sortBy || '';
    const format = filters?.format || '';

    //events from server
    const allEvents = mockCardsData.filter((event) => event?.status !== 'complete');
    //
    setFilteredEvents(allEvents);
  };

  const getCompletedEvents = () => {
    //events from server
    const completedEventsFromServer = mockCardsData.filter((event) => event?.status === 'complete');
    //
    setCompletedEvents(completedEventsFromServer);
  };

  const value = {
    filteredEvents,
    getFilteredEvents,
    completedEvents,
    getCompletedEvents,
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

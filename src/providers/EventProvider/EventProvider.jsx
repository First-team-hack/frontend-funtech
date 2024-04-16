import { useEffect, useState } from 'react';
import EventProviderContext from './EventProvider.context';
import { mockCardsData } from '../../utils/mock-data';
import { filterBy } from '../../utils/utils';

const EventProvider = ({ children }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(
    JSON.parse(localStorage.getItem('currentEvent')) || {}
  );
  const [isEventRegistrationPopupOpen, setIsEventRegistrationPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
  }, [currentEvent]);

  const openEventRegistrationPopup = (eventToRegister) => {
    setCurrentEvent(eventToRegister);
    setIsEventRegistrationPopupOpen(true);
  };
  const closeEventRegistrationPopup = () => {
    setIsEventRegistrationPopupOpen(false);
  };

  const openConfirmPopup = () => {
    setIsConfirmPopupOpen(true);
  };
  const closeConfirmPopup = () => {
    setIsConfirmPopupOpen(false);
  };

  const getFilteredEvents = (filters) => {
    const keyword = filters?.keyword || '';
    const theme = filters?.theme || '';
    const city = filters?.city || '';
    const sortBy = filters?.sortBy || '';
    const format = filters?.format || '';

    fetch('/events'); // GET
    const nonCompleteEvents = mockCardsData.filter((event) => event.status !== 'complete');
    const filteredEvents = filterBy(nonCompleteEvents, { keyword, theme, city, sortBy, format });
    return Promise.resolve().then(() => {
      setFilteredEvents(filteredEvents);
    });
  };

  const getCompletedEvents = () => {
    //events from server
    const completedEventsFromServer = mockCardsData.filter((event) => event?.status === 'complete');
    return Promise.resolve().then(() => {
      setCompletedEvents(completedEventsFromServer);
    });
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

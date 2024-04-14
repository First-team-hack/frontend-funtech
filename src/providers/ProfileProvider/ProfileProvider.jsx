import { useEffect, useState } from 'react';
import ProfileProviderContext from './ProfileProvider.context';
import { mockUserData, mockCardsData } from '../../utils/mock-data';
import union from 'lodash/union';

const ProfileProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
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
  });
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState(
    JSON.parse(localStorage.getItem('favoriteEvents')) || []
  );
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
  }, [favoriteEvents]);

  const login = (email, password) => {
    // get userDataFromServer
    const userDataFromServer = mockUserData;
    //
    setUserInfo((userInfo) => ({ ...userInfo, ...userDataFromServer }));
    getRegisteredEvents();
    getFavoriteEvents();
    getRecommendedEvents();
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserInfo({
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
    });
    setRegisteredEvents([]);
    setRecommendedEvents([]);
    setIsLoggedIn(false);
  };

  const updateUserInfo = (info) => {
    setUserInfo((userInfo) => ({ ...userInfo, ...info }));
  };

  const getRegisteredEvents = () => {
    // get registeredEvents from server
    const registeredEventsFromServer = mockCardsData.slice(7, 12);
    //
    setRegisteredEvents([...registeredEventsFromServer]);
  };

  const registerToEvent = (event, userId) => {
    // post register event to server
    setRegisteredEvents((prev) => [event, ...prev]);
  };

  const cancelRegistrationToEvent = (canceledEvent) => {
    // delete registered event  from server
    setRegisteredEvents((prev) => prev.filter((event) => event.id !== canceledEvent.id));
  };

  const getFavoriteEvents = () => {
    // get getFavoriteEvents from server
    const favoriteEventsFromServer = mockCardsData.slice(0, 2);
    //
    const unionFavoriteEvents = union(
      favoriteEventsFromServer,
      JSON.parse(localStorage.getItem('favoriteEvents'))
    );
    setFavoriteEvents([...unionFavoriteEvents]);
  };

  const addFavoriteEvent = (event, userId) => {
    // post register event to server
    setFavoriteEvents([event, ...favoriteEvents]);
  };

  const deleteFavoriteEvent = (deletedEvent) => {
    // delete registered event  from server
    setFavoriteEvents((prev) => prev.filter((event) => event.id !== deletedEvent.id));
  };

  const getRecommendedEvents = () => {
    //recom events from server
    const recommendedEventsFromServer = mockCardsData.slice(15, 18);
    //
    setRecommendedEvents(recommendedEventsFromServer);
  };

  const value = {
    userInfo,
    isLoggedIn,
    login,
    logout,
    updateUserInfo,
    registeredEvents,
    getRegisteredEvents,
    registerToEvent,
    cancelRegistrationToEvent,
    favoriteEvents,
    getFavoriteEvents,
    addFavoriteEvent,
    deleteFavoriteEvent,
    recommendedEvents,
    getRecommendedEvents,
  };

  return (
    <ProfileProviderContext.Provider value={value}>{children}</ProfileProviderContext.Provider>
  );
};

export default ProfileProvider;

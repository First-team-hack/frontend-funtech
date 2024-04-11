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
    position: '',
    workPlace: '',
    workExpirience: '',
    streamWatchHoursCount: 0,
  });
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState(
    JSON.parse(localStorage.getItem('favoriteEvents')) || []
  );
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
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserInfo({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      workPlace: '',
      workExpirience: '',
      streamWatchHoursCount: 0,
    });
    setIsLoggedIn(false);
  };

  const getRegisteredEvents = () => {
    // get registeredEvents from server
    const registeredEventsFromServer = mockCardsData.slice(0, 5);
    //
    setRegisteredEvents([...registeredEventsFromServer]);
  };

  const registerToEvent = (event, userId) => {
    // post register event to server
    setRegisteredEvents([event, ...registeredEvents]);
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

  const value = {
    userInfo,
    isLoggedIn,
    login,
    logout,
    registeredEvents,
    getRegisteredEvents,
    registerToEvent,
    cancelRegistrationToEvent,
    favoriteEvents,
    getFavoriteEvents,
    addFavoriteEvent,
    deleteFavoriteEvent,
  };

  return (
    <ProfileProviderContext.Provider value={value}>{children}</ProfileProviderContext.Provider>
  );
};

export default ProfileProvider;

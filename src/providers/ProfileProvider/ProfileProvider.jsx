import { useEffect, useState } from 'react';
import ProfileProviderContext from './ProfileProvider.context';
import { mockUserData, mockCardsData } from '../../utils/mock-data';
import union from 'lodash/union';
import { reject } from 'lodash';

const ProfileProvider = ({ children }) => {
  const defaultUserInfoState = {
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
  };
  const [userInfo, setUserInfo] = useState(defaultUserInfoState);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState(
    JSON.parse(localStorage.getItem('favoriteEvents')) || []
  );
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
  }, [favoriteEvents]);

  const login = () => {
    fetch('/auth/jwt/create'); //POST
    return Promise.resolve({ token: 'mockJWTtoken' }).then((data) => {
      localStorage.setItem('jwt', data.token);
      getAllUserData().then(() => {
        setIsLoggedIn(true);
      });
    });
  };

  function getAllUserData() {
    fetch('/profile/users/me'); //GET
    fetch('/events/registered'); //GET
    fetch('/events/favorites'); //GET
    fetch('/events/recommended'); //GET

    const userDataFromServer = mockUserData;
    const registeredEventsFromServer = mockCardsData.slice(7, 12);
    const favoriteEventsFromServer = mockCardsData.slice(0, 2);
    const recommendedEventsFromServer = mockCardsData.slice(15, 18);
    return Promise.resolve().then(() => {
      setUserInfo((userInfo) => ({ ...userInfo, ...userDataFromServer }));
      setRegisteredEvents([...registeredEventsFromServer]);
      const unionFavoriteEvents = union(
        favoriteEventsFromServer,
        JSON.parse(localStorage.getItem('favoriteEvents'))
      );
      setFavoriteEvents([...unionFavoriteEvents]);
      setRecommendedEvents(recommendedEventsFromServer);
    });
  }

  const logout = () => {
    setUserInfo(defaultUserInfoState);
    setRegisteredEvents([]);
    setRecommendedEvents([]);
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  };

  const updateUserInfo = (info) => {
    fetch('/profile/users/me'); //PATCH
    return Promise.resolve().then(() => setUserInfo((userInfo) => ({ ...userInfo, ...info })));
  };

  const registerToEvent = (event) => {
    fetch('/events/registered'); //POST

    return new Promise((resolve, reject) => {
      if (registeredEvents.some((registeredEvent) => registeredEvent.id === event.id)) {
        reject('Вы уже зарегистрированны на данное мероприятие!');
      } else {
        resolve();
        setRegisteredEvents((prev) => [event, ...prev]);
      }
    });
  };

  // return Promise.resolve().then(() => setRegisteredEvents((prev) => [event, ...prev]));

  const cancelRegistrationToEvent = (canceledEvent) => {
    fetch('/events/registered'); //DELETE

    return Promise.resolve().then(() =>
      setRegisteredEvents((prev) => prev.filter((event) => event.id !== canceledEvent.id))
    );
  };

  const addFavoriteEvent = (event) => {
    fetch('/events/favorites'); //POST
    return Promise.resolve().then(() => setFavoriteEvents((prev) => [event, ...prev]));
  };

  const deleteFavoriteEvent = (deletedEvent) => {
    fetch('/events/favorites'); //DELETE

    return Promise.resolve().then(() =>
      setFavoriteEvents((prev) => prev.filter((event) => event.id !== deletedEvent.id))
    );
  };

  const value = {
    userInfo,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    getAllUserData,
    updateUserInfo,
    registeredEvents,
    registerToEvent,
    cancelRegistrationToEvent,
    favoriteEvents,
    addFavoriteEvent,
    deleteFavoriteEvent,
    recommendedEvents,
  };

  return (
    <ProfileProviderContext.Provider value={value}>{children}</ProfileProviderContext.Provider>
  );
};

export default ProfileProvider;

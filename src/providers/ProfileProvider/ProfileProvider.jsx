import { useEffect, useState } from 'react';
import ProfileProviderContext from './ProfileProvider.context';
import { mockUserData, mockCardsData, mockNotificationData } from '../../utils/mock-data';
import { unionWith, isEqual } from 'lodash';

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

  const [newNotifications, setNewNotifications] = useState([]);
  const [watchedNotifications, setWatchedNotifications] = useState([]);

  useEffect(() => {
    localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
  }, [favoriteEvents]);

  const login = () => {
    //POST get jwt in response
    return Promise.resolve({ token: 'mockJWTtoken' }).then((data) => {
      localStorage.setItem('jwt', data.token);
      getAllUserData().then(() => {
        setIsLoggedIn(true);
      });
    });
  };

  function getAllUserData() {
    //GET userInfo
    //GET registered events
    //GET favorite events
    //GET recommended events
    //GET new notifications
    //GET watched notifications

    const userDataFromServer = mockUserData;
    const registeredEventsFromServer = mockCardsData.slice(7, 12);
    const favoriteEventsFromServer = mockCardsData.slice(0, 2);
    const recommendedEventsFromServer = mockCardsData.slice(15, 18);
    const localFavoritesEvents = JSON.parse(localStorage.getItem('favoriteEvents'));
    const newNotificationFromServer = mockNotificationData
      .filter((notification) => !notification.watched)
      .reverse();
    const watchedNotificationFromServer = mockNotificationData
      .filter((notification) => notification.watched)
      .reverse();
    return Promise.resolve().then(() => {
      setUserInfo((userInfo) => ({ ...userInfo, ...userDataFromServer }));
      setRegisteredEvents([...registeredEventsFromServer]);
      const unionFavoriteEvents = unionWith(
        localFavoritesEvents,
        favoriteEventsFromServer,
        isEqual
      );
      setFavoriteEvents(unionFavoriteEvents);
      setRecommendedEvents(recommendedEventsFromServer);
      setNewNotifications(newNotificationFromServer);
      setWatchedNotifications(watchedNotificationFromServer);
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
    // PATCH userInfo
    return Promise.resolve().then(() => setUserInfo((userInfo) => ({ ...userInfo, ...info })));
  };

  const registerToEvent = (event) => {
    //POST new registered event

    return new Promise((resolve, reject) => {
      if (registeredEvents.some((registeredEvent) => registeredEvent.id === event.id)) {
        reject('Вы уже зарегистрированны на данное мероприятие!');
      } else {
        resolve();
        setRegisteredEvents((prev) => [event, ...prev]);
        addNewNotification('newRegistration', event).catch((error) => console.log(error));
      }
    });
  };

  const cancelRegistrationToEvent = (canceledEvent) => {
    //DELETE registered event

    return Promise.resolve().then(() => {
      setRegisteredEvents((prev) => prev.filter((event) => event.id !== canceledEvent.id));
      addNewNotification('cancelRegistration', canceledEvent).catch((error) => console.log(error));
    });
  };

  const addFavoriteEvent = (event) => {
    //POST new favorite event
    return Promise.resolve().then(() => setFavoriteEvents((prev) => [event, ...prev]));
  };

  const deleteFavoriteEvent = (deletedEvent) => {
    //DELETE favorite event

    return Promise.resolve().then(() =>
      setFavoriteEvents((prev) => prev.filter((event) => event.id !== deletedEvent.id))
    );
  };

  // const getAllNotifications = () => {
  //   //GET notifications from server
  //   const newNotificationFromServer = mockNotificationData.filter(
  //     (notification) => !notification.watched
  //   );
  //   const watchedNotificationFromServer = mockNotificationData.filter(
  //     (notification) => notification.watched
  //   );
  //   return Promise.resolve().then(() => {
  //     setNewNotifications(newNotificationFromServer);
  //     setWatchedNotifications(watchedNotificationFromServer);
  //   });
  // };

  const addNewNotification = (type, event) => {
    const newNotificationId = newNotifications.length + watchedNotifications.length + 1;
    const newNotification = {
      id: newNotificationId,
      type: type,
      event: event,
      date: new Date(),
      watched: false,
    };
    return Promise.resolve().then(() => {
      setNewNotifications((prev) => [newNotification, ...prev]);
    });
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
    newNotifications,
    watchedNotifications,
    addNewNotification,
  };

  return (
    <ProfileProviderContext.Provider value={value}>{children}</ProfileProviderContext.Provider>
  );
};

export default ProfileProvider;

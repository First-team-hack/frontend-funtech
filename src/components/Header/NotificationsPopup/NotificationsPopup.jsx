import { useEffect, useRef, useState } from 'react';
import './NotificationsPopup.css';
import icons from '../../../assets/icons/icons';
import { useNavigate } from 'react-router-dom';
import NotificationsPopupListItem from '../NotificationsPopupListItem/NotificationsPopupListItem';

function NotificationsPopup(props) {
  // isLinkActive - состояние ссылки "Уведомления в хедере" активна - true, неактивная - false
  // newNotifications - массив непрочитыванных уведомлений
  const { isLinkActive, newNotifications = [] } = props;

  // NOTIFICATION_LIMIT количество уведомлений показываемых в попапе
  const NOTIFICATION_LIMIT = 5;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function onNotificationsButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  }
  const root = useRef();

  useEffect(() => {
    const onClick = (e) => root.current.contains(e.target) || closePopup();
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    function closePopupsByEscape(evt) {
      if (evt.key === 'Escape') {
        closePopup();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closePopupsByEscape);
      return () => {
        document.removeEventListener('keydown', closePopupsByEscape);
      };
    }
  }, [isOpen]);

  function onFullscreenButtonClick(e) {
    setIsOpen(false);
    navigate('/notifications');
  }

  function closePopup() {
    setIsOpen(false);
  }

  // функция для остановки "всплытия" чтобы при клике на попап не происходило перехода по навлинку
  function stopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="notifications-popup" onClick={stopPropagation}>
      <button
        className={
          'notifications-popup__button notifications-popup__button_type_main' +
          (isOpen ? ' notifications-popup__button_pressed' : '')
        }
        onClick={onNotificationsButtonClick}
      >
        <img
          className="notifications-popup__button-icon"
          src={isLinkActive ? icons.notificationsBlue : icons.notificationsGrey}
          alt="иконка"
        />
      </button>
      {newNotifications && newNotifications.length !== 0 && (
        <span className="notifications-popup__new-marker" />
      )}
      <div
        className={
          `notifications-popup__container` +
          (isOpen ? ' notifications-popup__container_visible' : '')
        }
        ref={root}
      >
        <div className="notifications-popup__header">
          <p className="notifications-popup__title">
            {'Уведомления'}
            <span className="notifications-popup__title-accent">
              {'+' + newNotifications.length}
            </span>
          </p>
          <button
            className="notifications-popup__button notifications-popup__button_type_fullscreen"
            onClick={onFullscreenButtonClick}
          />
          <button
            className="notifications-popup__button notifications-popup__button_type_close"
            onClick={closePopup}
          />
        </div>
        <ul className="notifications-popup__list">
          {newNotifications.slice(0, NOTIFICATION_LIMIT).map((item) => (
            <NotificationsPopupListItem notification={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsPopup;

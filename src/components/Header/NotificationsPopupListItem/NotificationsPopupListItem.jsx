import { Link } from 'react-router-dom';
import './NotificationsPopupListItem.css';

function NotificationsPopupListItem(props) {
  const { notification } = props;
  return (
    <li className="notifications-popup-list-item">
      <div className="notifications-popup-list-item__texts">
        <h3 className="notifications-popup-list-item__title readed">{notification.title}</h3>
        <p className="notifications-popup-list-item__text">{notification.text}</p>
        <Link className="notifications-popup-list-item__link" to={notification.broadcastUrl}>
          Ссылка на трянсляцию
        </Link>
      </div>
      <p className="notifications-popup-list-item__age">{notification.age}</p>
    </li>
  );
}

export default NotificationsPopupListItem;

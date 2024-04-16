import Notification from '../../components/Notification/Notification';
import './Notifications.css';
import { mockNotificationData } from '../../utils/mock-data';
function Notifications() {
  const newNotification = mockNotificationData
    .filter((notification) => !notification.watched)
    .reverse();
  const watchedNotification = mockNotificationData
    .filter((notification) => notification.watched)
    .reverse();
  return (
    <main className="notifications">
      <div className="notifications__container">
        <section className="notifications__new">
          <h2 className="notifications__section-title">Новые уведомления</h2>
          <ul className="notification__list">
            {newNotification.map((notification) => (
              <Notification
                key={notification.id}
                event={notification.event}
                type={notification.type}
                date={notification.date}
              />
            ))}
          </ul>
        </section>
        <section className="notifications__watched">
          <h2 className="notifications__section-title">Просмотренные уведомления</h2>
          <ul className="notification__list">
            {watchedNotification.map((notification) => (
              <Notification
                key={notification.id}
                event={notification.event}
                type={notification.type}
                date={notification.date}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Notifications;

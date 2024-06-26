import Notification from '../../components/Notification/Notification';
import './Notifications.css';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
function Notifications() {
  const { newNotifications, watchedNotifications } = useProfile();
  return (
    <main className="notifications">
      <div className="notifications__container">
        {newNotifications.length !== 0 && (
          <section className="notifications__new">
            <h2 className="notifications__section-title">Новые уведомления</h2>
            <ul className="notification__list">
              {newNotifications.map((notification) => (
                <Notification
                  key={notification.id}
                  id={notification.id}
                  event={notification.event}
                  type={notification.type}
                  date={notification.date}
                  watched={notification.watched}
                />
              ))}
            </ul>
          </section>
        )}
        <section className="notifications__watched">
          <h2 className="notifications__section-title">Просмотренные уведомления</h2>
          <ul className="notification__list">
            {watchedNotifications.map((notification) => (
              <Notification
                key={notification.id}
                id={notification.id}
                event={notification.event}
                type={notification.type}
                date={notification.date}
                watched={notification.watched}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Notifications;

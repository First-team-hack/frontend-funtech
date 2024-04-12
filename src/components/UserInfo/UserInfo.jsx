import EventsTab from '../EventsTab/EventsTab';
import UserBar from '../UserBar/UserBar';

function UserInfo() {
  return (
    <section className="userinfo">
      <UserBar />
      <EventsTab />
    </section>
  );
}

export default UserInfo;

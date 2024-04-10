import './Profile.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import EventsTab from '../../components/EventsTab/EventsTab';
import UserBar from '../../components/UserBar/UserBar';

function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <Breadcrumbs />
        <UserBar />
        <EventsTab />
      </div>
    </main>
  );
}

export default Profile;

import './Profile.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import UserBar from './UserBar/UserBar';
import { userData } from '../../utils/mock-data';
import EventsTab from '../../components/EventsTab/EventsTab';
import { cardsData } from '../../utils/mock-data';

function Profile() {
  const expectedEvents = cardsData.filter((event) => Date.now() - event.date.getTime() < 0);
  const completedEvents = cardsData.filter((event) => Date.now() - event.date.getTime() > 0);
  return (
    <main className="profile">
      <div className="profile__container">
        <Breadcrumbs />
        <UserBar user={userData} />
        <EventsTab expectedEvents={expectedEvents} completedEvents={completedEvents} />
      </div>
    </main>
  );
}

export default Profile;

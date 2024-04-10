import './Profile.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import UserBar from './UserBar/UserBar';
import { mockUserData } from '../../utils/mock-data';
import EventsTab from '../../components/EventsTab/EventsTab';
import { mockCardsData } from '../../utils/mock-data';

function Profile() {
  const expectedEvents = mockCardsData.filter((event) => Date.now() - event.date.getTime() < 0);
  const completedEvents = mockCardsData.filter((event) => Date.now() - event.date.getTime() > 0);
  return (
    <main className="profile">
      <div className="profile__container">
        <Breadcrumbs />
        <UserBar user={mockUserData} />
        <EventsTab expectedEvents={expectedEvents} completedEvents={completedEvents} />
      </div>
    </main>
  );
}

export default Profile;

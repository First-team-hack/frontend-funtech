import './Profile.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import EventsTab from '../../components/EventsTab/EventsTab';
import { mockCardsData } from '../../utils/mock-data';
import UserBar from '../../components/UserBar/UserBar';
import useUser from '../../providers/ProfileProvider/ProfileProvider.hook';

function Profile() {
  const user = useUser();

  const expectedEvents = mockCardsData.filter((event) => Date.now() - event.date.getTime() < 0);
  const completedEvents = mockCardsData.filter((event) => Date.now() - event.date.getTime() > 0);
  return (
    <main className="profile">
      <div className="profile__container" onClick={user.login}>
        <Breadcrumbs />
        <UserBar />
        <EventsTab expectedEvents={expectedEvents} completedEvents={completedEvents} />
      </div>
    </main>
  );
}

export default Profile;

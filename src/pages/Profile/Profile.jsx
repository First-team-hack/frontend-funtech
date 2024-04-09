import './Profile.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import UserBar from './UserBar/UserBar';
import { userData } from '../../utils/mock-data';

function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <Breadcrumbs />
        <UserBar user={userData} />
      </div>
    </main>
  );
}

export default Profile;

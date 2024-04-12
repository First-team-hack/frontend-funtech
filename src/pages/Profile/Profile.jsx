import Settings from '../../components/Settings/Settings';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Profile.css';

import { Route, Routes } from 'react-router';

function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
}

export default Profile;

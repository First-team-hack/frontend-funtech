import { Link } from 'react-router-dom';
import './UserBar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import InputIcon from '@mui/icons-material/Input';
import IconButton from '@mui/material/IconButton';
import { PROFILE_ROUTE } from '../../utils/constants';
import globalTheme from '../../themes/globalTheme';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';

function UserBar() {
  const { userInfo } = useProfile();

  return (
    <section className="userbar">
      <div className="userbar__container">
        <img
          className="userbar__avatar"
          src={userInfo?.avatarUrl || ''}
          alt="Фотография пользователя"
        />
        <ul className="userbar__info">
          <li className="userbar__name">{`${userInfo?.firstName || 'Имя'} ${
            userInfo?.lastName || 'Фамилия'
          }`}</li>
          <li className="userbar__email">{`${userInfo?.email || 'почта'}`}</li>
          <li className="userbar__watched-hours">{`Количество просмотренных часов ${
            userInfo?.watchedHours || '0'
          }`}</li>
        </ul>
        <div className="userbar__actions">
          <Link
            className="userbar__settings userbar__button"
            to={`${PROFILE_ROUTE}/settings`}
            aria-label="Настройки"
            title="Настройки"
          >
            <SettingsIcon />
          </Link>
          <IconButton
            className="userbar__button"
            aria-label="Выйти из аккаунта"
            title="Выйти из аккаунта"
            sx={{ color: globalTheme.palette.colorCustomButtonText }}
          >
            <InputIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default UserBar;

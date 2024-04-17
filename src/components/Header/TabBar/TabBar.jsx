import './TabBar.css';
import { NavLink } from 'react-router-dom';
import icons from '../../../assets/icons/icons';
import {
  BILLBOARD_ROUTE,
  NOTIFICATIONS_ROUTE,
  FAVORITES_ROUTE,
  PROFILE_ROUTE,
} from '../../../utils/constants';

function TabBar() {
  return (
    <nav className="tabbar">
      <NavLink className="tabbar__link" to={BILLBOARD_ROUTE} end>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.afishaBlue : icons.afishaGrey}
                alt="иконка"
              />
              Афиша
            </>
          );
        }}
      </NavLink>
      <NavLink className="tabbar__link" to={NOTIFICATIONS_ROUTE}>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.notificationsBlue : icons.notificationsGrey}
                alt="иконка"
              />
              Уведомления
            </>
          );
        }}
      </NavLink>
      <NavLink className="tabbar__link" to={FAVORITES_ROUTE}>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.favoritesBlue : icons.favoritesGrey}
                alt="иконка"
              />
              Избранное
            </>
          );
        }}
      </NavLink>
      <NavLink className="tabbar__link" to={PROFILE_ROUTE}>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.profileBlue : icons.profileGrey}
                alt="иконка"
              />
              Профиль
            </>
          );
        }}
      </NavLink>
    </nav>
  );
}

export default TabBar;

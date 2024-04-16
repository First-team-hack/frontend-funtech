import './TabBar.css';
import { NavLink } from 'react-router-dom';
import icons from '../../../assets/icons/icons';
import {
  BILLBOARD_ROUTE,
  RANDOM_COFFEE_ROUTE,
  NOTIFICATIONS_ROUTE,
  FAVORITES_ROUTE,
  PROFILE_ROUTE,
  ROUTE_NAMES,
} from '../../../utils/constants';

function TabBar() {
  return (
    <nav className="tabbar">
      <NavLink className="tabbar__link" to={BILLBOARD_ROUTE}>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.afishaBlue : icons.afishaGrey}
                alt="иконка"
              />
              {ROUTE_NAMES[BILLBOARD_ROUTE]}
            </>
          );
        }}
      </NavLink>
      <NavLink className="tabbar__link" to={RANDOM_COFFEE_ROUTE}>
        {({ isActive }) => {
          return (
            <>
              <img
                className="tabbar__link-icon"
                src={isActive ? icons.coffeeBlue : icons.coffeeGrey}
                alt="иконка"
              />
              {ROUTE_NAMES[RANDOM_COFFEE_ROUTE]}
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
              {ROUTE_NAMES[NOTIFICATIONS_ROUTE]}
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
              {ROUTE_NAMES[FAVORITES_ROUTE]}
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
              {ROUTE_NAMES[PROFILE_ROUTE]}
            </>
          );
        }}
      </NavLink>
    </nav>
  );
}

export default TabBar;

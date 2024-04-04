import { Link, useMatch } from 'react-router-dom';
import './NavLinkWithButton.css';
import NotificationsPopup from '../NotificationsPopup/NotificationsPopup';

function NavLinkWithButton(props) {
  const { children, to, newNotifications } = props;
  const match = useMatch(to);
  return (
    <div className="navlink-with-button">
      <NotificationsPopup
        isLinkActive={match}
        newNotifications={newNotifications}
      ></NotificationsPopup>
      <Link
        className={'navlink-with-button__link' + (match ? ' navlink-with-button__link_active' : '')}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLinkWithButton;

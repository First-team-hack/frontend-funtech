import './Header.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import TabBar from './TabBar/TabBar';
import { notifications } from '../../utils/mock-data';
import { BILLBOARD_ROUTE } from '../../utils/constants';

function Header() {
  return (
    <header className="header">
      <Link to={BILLBOARD_ROUTE}>
        <Logo size="161px" />
      </Link>
      <TabBar newNotifications={notifications} />
    </header>
  );
}

export default Header;

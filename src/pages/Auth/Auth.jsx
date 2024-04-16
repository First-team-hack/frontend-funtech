import './Auth.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
import { Link, useNavigate } from 'react-router-dom';
import { BILLBOARD_ROUTE } from '../../utils/constants';
import globalTheme from '../../themes/globalTheme';
import { useLocation } from 'react-router';
function Auth() {
  const { login } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();
  const onLoginClick = () => {
    login().then(
      setTimeout(() => {
        navigate(location.state || BILLBOARD_ROUTE);
      }, 0)
    );
  };
  return (
    <main className="auth">
      <Link to={BILLBOARD_ROUTE}>
        <div className="auth__logo" />
      </Link>
      <h1 className="auth__title">Единый профиль для всех мероприятий </h1>
      <div className="auth__form">
        <CustomButton
          sx={{
            width: '306px',
            height: '45px',
            borderRadius: '12px',
            fontSize: '18px',
            backgroundColor: globalTheme.palette.colorStrokeAccent,
          }}
          onClick={onLoginClick}
        >
          Войти
        </CustomButton>
      </div>
    </main>
  );
}

export default Auth;

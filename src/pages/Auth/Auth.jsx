import './Auth.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
import { useNavigate } from 'react-router-dom';
import { BILLBOARD_ROUTE } from '../../utils/constants';
import globalTheme from '../../themes/globalTheme';

function Auth() {
  const { login } = useProfile();
  const navigate = useNavigate();
  const onLoginClick = () => {
    login();
    navigate(BILLBOARD_ROUTE);
  };
  return (
    <main className="auth">
      <div className="auth__logo" />
      <h1 className="auth__title">Единый профиль для всех меропиятий </h1>
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

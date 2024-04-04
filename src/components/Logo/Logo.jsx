import './Logo.css';
import LogoImg from '../../assets/logo.svg';

function Logo({ width }) {
  const logoStyle = {
    width: width,
    height: 'auto',
  };
  return <img className="logo" src={LogoImg} alt="Янднекс Ивентс" style={logoStyle} />;
}

export default Logo;

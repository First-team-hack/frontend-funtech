import './Main.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomSelect from '../../components/CustomSelect/CustomSelect';

function Main() {
  return (
    <main className="main">
      <Breadcrumbs />
      <CustomButton>dsadsadsasd</CustomButton>
      <CustomSelect
        label="Город"
        placeholder="Город"
        items={['dsadsadsa', 'dsadsadsa', 'dsadsadsadsa']}
      ></CustomSelect>
    </main>
  );
}

export default Main;

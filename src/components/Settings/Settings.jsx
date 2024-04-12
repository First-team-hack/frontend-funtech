import './Settings.css';
import CustomSelect from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

function Settings() {
  return (
    <section className="settings">
      <form className="settings__form">
        <div className="settings__fieldset-container">
          <fieldset className="settings__fieldset">
            <legend className="settings__legend">Личные данные</legend>
            <div className="settings__input-grid">
              <Input label="Имя" />
              <Input label="Почта" />
              <Input label="Фамилия" />
              <Input label="Телефон" type="tel" />
              <CustomSelect label="Направление" sx={{ width: '305px' }}></CustomSelect>
            </div>
          </fieldset>
          <fieldset className="settings__fieldset">
            <legend className="settings__legend">Способ получения уведомлений</legend>
            <div className="settings__input-grid">
              <Input label="Telegram"></Input>
              <Input label="WhatsApp"></Input>
              <Input label="Vkontakte"></Input>
              <Input label="Viber"></Input>
            </div>
          </fieldset>
        </div>
        <div className="settings__actions">
          <CustomButton
            sx={{ width: '250px', height: '50px', borderRadius: '20px', fontSize: '16px' }}
          >
            Сохранить
          </CustomButton>
          <CustomButton
            variant="outlined"
            sx={{ width: '250px', height: '50px', borderRadius: '20px', fontSize: '16px' }}
          >
            Отмена
          </CustomButton>
        </div>
      </form>
    </section>
  );
}

export default Settings;

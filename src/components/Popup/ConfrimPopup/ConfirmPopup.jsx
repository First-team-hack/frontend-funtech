import './ConfirmPopup.css';
import useEvent from '../../../providers/EventProvider/EventProvider.hook';
import useProfile from '../../../providers/ProfileProvider/ProfileProvider.hook';
import Popup from '../Popup';

function ConfirmPopup() {
  const { currentEvent, isConfirmPopupOpen, closeConfirmPopup } = useEvent();
  const { cancelRegistrationToEvent } = useProfile();

  const handleConfirmButtonClick = () => {
    cancelRegistrationToEvent(currentEvent);
    closeConfirmPopup();
  };
  return (
    <Popup open={isConfirmPopupOpen} onClose={closeConfirmPopup}>
      <div className="confirm-popup">
        <h2 className="confirm-popup__title">Отмена записи на мероприятие</h2>
        <p className="confirm-popup__text">Вы уверены, что хотите отменить запись?</p>
        <div className="confirm-popup__actions">
          <button
            type="button"
            aria-label="Подтверить отмену регистрации"
            title="Подтверить отмену регистрации"
            className="confirm-popup__button confirm-popup__button_type_confirm"
            onClick={handleConfirmButtonClick}
          >
            Да
          </button>
          <button
            type="button"
            aria-label="Не отменять регистрацию"
            title="Не отменять регистрацию"
            className="confirm-popup__button confirm-popup__button_type_cancel"
            onClick={closeConfirmPopup}
          >
            Нет
          </button>
        </div>
      </div>
    </Popup>
  );
}

export default ConfirmPopup;

import { useEffect, useState } from 'react';
import useEvent from '../../../providers/EventProvider/EventProvider.hook';
import Popup from '../Popup';
import './EventRegistrationPopup.css';
import useProfile from '../../../providers/ProfileProvider/ProfileProvider.hook';

function EventRegistrationPopup() {
  const { currentEvent, isEventRegistrationPopupOpen, closeEventRegistrationPopup } = useEvent();
  const { login, isLoggedIn, registerToEvent } = useProfile();

  const hasEventOfflineFormat = currentEvent.format?.includes('offline') || false;
  // steps
  // 0 = error
  // 1 = authorization
  // 2 = choose format online/offline
  // 3 = offer online (if offline seats left = 0)
  // 4 = register success
  // -1 = initial state for prevent render any step
  const [step, setStep] = useState(-1);

  // after popup mount choosing start step
  useEffect(() => {
    // //  if user is logged in, AND event HAS NOT offline format, we can immediately register user to event
    if (isLoggedIn && !hasEventOfflineFormat) {
      registerToEvent(currentEvent);
      setStep(4);
      // else if user is logged in, AND event HAS offline format, give user choosee participaion format
    } else if (isLoggedIn) {
      setStep(2);
      // else user is NOT logged in, offer user authorization
    } else {
      setStep(1);
    }
  }, []);

  const [participationFormat, setParticipationFormat] = useState('online');
  const handleChange = (event) => {
    setParticipationFormat(event.target.value);
  };

  return (
    <Popup open={isEventRegistrationPopupOpen} onClose={closeEventRegistrationPopup}>
      {/* step 1 start */}
      {step === 1 && (
        <div className="event-registration-popup">
          <h2 className="event-registration-popup__title">Регистрация на мероприятие</h2>
          <p className="event-registration-popup__text">
            Необходисо авторизоваться с помощью Яндекс ID! Это будет для Вас удобно! Так вы сможете
            регистрироваться на все события в один клик, не заполняя форму. А также откроет доступ к
            функциям: избранное, встречам Random Coffee, получение анонсов предстоящих событий в
            удобном формате.
          </p>
          <div className="event-registration-popup__actions">
            <button
              type="button"
              className="event-registration-popup__button event-registration-popup__button_type_confirm"
              onClick={() => {
                login();
                if (hasEventOfflineFormat) {
                  setStep(2);
                } else {
                  registerToEvent(currentEvent);
                  setStep(4);
                }
              }}
            >
              Войти с Яндекс.ID
            </button>
            <button
              type="button"
              className="event-registration-popup__button event-registration-popup__button_type_cancel"
              onClick={() => {
                closeEventRegistrationPopup();
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      {/* step 1 end */}

      {/* step 2 start */}
      {step === 2 && (
        <div className="event-registration-popup">
          <h2 className="event-registration-popup__title">Регистрация на мероприятие</h2>
          <form className="event-registration-popup__form">
            <fieldset className="event-registration-popup__fieldset">
              <legend className="event-registration-popup__fieldset-legend">Выберите формат</legend>
              <div className="event-registration-popup__radio-box">
                <input
                  className="event-registration-popup__radio"
                  type="radio"
                  id="online"
                  name="online"
                  value="online"
                  checked={participationFormat === 'online'}
                  onChange={handleChange}
                />
                <label className="event-registration-popup__radio-label" htmlFor="online">
                  Онлайн (запись мероприятия будет доступна после завершения трансляции)
                </label>
              </div>
              <div className="event-registration-popup__radio-box">
                <input
                  className="event-registration-popup__radio"
                  type="radio"
                  id="offline"
                  name="offline"
                  value="offline"
                  checked={participationFormat === 'offline'}
                  onChange={handleChange}
                />
                <label className="event-registration-popup__radio-label" htmlFor="offline">
                  {`Офлайн (пройдет по адресу: ${currentEvent.city}, ${currentEvent.address})`}
                </label>
              </div>
            </fieldset>
          </form>
          <div className="event-registration-popup__actions">
            <button
              className="event-registration-popup__button event-registration-popup__button_type_confirm"
              onClick={() => {
                if (participationFormat === 'offline' && currentEvent.seatsLeft === 0) {
                  setParticipationFormat('online');
                  setStep(3);
                } else {
                  registerToEvent(currentEvent);
                  setStep(4);
                }
              }}
            >
              Зарегистрироваться
            </button>
            <button
              type="button"
              className="event-registration-popup__button event-registration-popup__button_type_cancel"
              onClick={() => {
                closeEventRegistrationPopup();
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      {/* step 2 end */}

      {/* step 3 start */}
      {step === 3 && (
        <div className="event-registration-popup">
          <h2 className="event-registration-popup__title">
            Упс! Места на&nbsp;
            <span className="event-registration-popup__title_negative">offline закончились!</span>
          </h2>
          <p className="event-registration-popup__text">
            Нам очень жаль, но места в offline формате закончились! Вы можете зарегистрироваться
            online.
          </p>
          <div className="event-registration-popup__actions">
            <button
              className="event-registration-popup__button event-registration-popup__button_type_confirm"
              onClick={() => {
                registerToEvent(currentEvent);
                setStep(4);
              }}
            >
              Зарегистрироваться online
            </button>
            <button
              type="button"
              className="event-registration-popup__button event-registration-popup__button_type_cancel"
              onClick={() => {
                closeEventRegistrationPopup();
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      {/* step 3 end */}

      {/* step 4 start */}
      {step === 4 && (
        <div className="event-registration-popup">
          <h2 className="event-registration-popup__title">
            Вы успешно зарегистрировались на мероприятие
          </h2>

          {participationFormat === 'online' ? (
            <p className="event-registration-popup__text">
              Мероприятие пройдет
              <span className="event-registration-popup__text_positive">{` онлайн ${currentEvent.date?.toLocaleDateString(
                'ru-Ru'
              )} в ${currentEvent.time}`}</span>
              <br />
              <br />
              За час до нaчала Вам придет уведомление
            </p>
          ) : (
            <p className="event-registration-popup__text">
              Мероприятие пройдет
              <span className="event-registration-popup__text_positive">{` ${currentEvent.date?.toLocaleDateString(
                'ru-Ru'
              )} в ${currentEvent.time}`}</span>
              <br />
              <br />
              {`Адрес проведения: ${currentEvent.city}, ${currentEvent.address}`}
            </p>
          )}
          <button
            type="button"
            className="event-registration-popup__button event-registration-popup__button_type_cancel"
            onClick={() => {
              closeEventRegistrationPopup();
            }}
          >
            Закрыть
          </button>
        </div>
      )}
      {/* step 4 end */}

      {/* step 0 start */}
      {step === 0 && (
        <div className="event-registration-popup">
          <h2 className="event-registration-popup__title">
            УПС! кажется,&nbsp;
            <span className="event-registration-popup__title_negative">что-то пошло не так!</span>
          </h2>
          <p className="event-registration-popup__text">Попробуйте зарегистрироваться позднее.</p>
          <button
            type="button"
            className="event-registration-popup__button event-registration-popup__button_type_cancel"
            onClick={() => {
              closeEventRegistrationPopup();
            }}
          >
            Закрыть
          </button>
        </div>
      )}
      {/* step 0 end */}
    </Popup>
  );
}

export default EventRegistrationPopup;

import useEvent from '../../providers/EventProvider/EventProvider.hook';
import { EVENTS_ROUTE } from '../../utils/constants';
import './Notification.css';
import { useNavigate } from 'react-router-dom';

function Notification(props) {
  const navigate = useNavigate();
  const { setCurrentEvent } = useEvent();
  const onButtonClick = () => {
    setCurrentEvent(props.event);
    navigate(`${EVENTS_ROUTE}/${props.event?.id}`);
  };
  return (
    <li className="notification">
      <div className="notification__content">
        <h3 className="notification__title">
          {props.type === 'eventBegin' && 'Мероприятие началось'}
          {props.type === 'newRegistration' && 'Регистрация на мероприятие'}
          {props.type === 'cancelRegistration' && 'Отмена регистрации'}
        </h3>
        <p className="notiification__text">
          {props.type === 'eventBegin' &&
            `Мероприятие '${props.event?.title}' началось! Переходите по ссылке чтобы смотреть трансляцию`}
          {props.type === 'newRegistration' &&
            `Вы зарегистрированы на мероприятие '${props.event?.title}'`}
          {props.type === 'cancelRegistration' &&
            `Ваша зарегистрация на мероприятие '${props.event?.title}' отменена`}
        </p>
        {props.type === 'eventBegin' && (
          <button
            className="notification__live-link"
            type="button"
            onClick={onButtonClick}
            aria-label="Смотреть транляцию"
            title="Смотреть трансляцию"
          >
            Смотреть трансляцию
          </button>
        )}
      </div>
      <p className="notification__date">{props.date?.toLocaleDateString()}</p>
    </li>
  );
}

export default Notification;

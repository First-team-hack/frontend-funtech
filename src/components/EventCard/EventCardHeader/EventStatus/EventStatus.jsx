import './EventStatus.css';

/**
 * Компонент статуса мероприятия
 * @param {boolean} isOnline boolean - проводится ли мероприятие онлайн true - да, false -нет
 * @param {string} city - string - город в котором проводится мероприятие, если аргумент не задан значит мероприятие проводится только онлайн
 * @param {number} seatsLeft - number - количество оставшихся мест для оффлайн мероприятия
 * @param {boolean} isOver -  boolean - true - мероприятие завершилось, false - мероприятие еще не завершилось
 * @param {string} textColor - string - для белого цвета текста 'white', для черного 'black', по дефолту установлен 'white'
 * @param {string} onlySeast - boolean true - показывать только количество оставшихся мест
 */
function EventStatus({ isOnline, city, seatsLeft, isOver, textColor, onlySeats }) {
  function getDotColor(seatsLeft) {
    if (typeof seatsLeft !== 'number' || seatsLeft <= 5) {
      return 'red';
    }
    if (seatsLeft > 5 && seatsLeft < 30) {
      return 'yellow';
    }
    // если предыщуие условия не сработали это означает что у количества мест тип number и значение >=30, поэтому возвращаем зеленый цвет
    return 'green';
  }

  function getSeatWord(value) {
    const words = ['место', 'места', 'мест'];
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  return (
    <div className={`event-status `} style={{ color: `${textColor}` }}>
      {!onlySeats && city && (
        <p className="event-status__text event-status__text_type_city">{city}</p>
      )}

      {!onlySeats && isOnline && (
        <p className="event-status__text event-status__text_type_online">онлайн</p>
      )}
      {city && !isOver && (
        <p
          className={`event-status__text event-status__text_type_seats-left event-status__text_dot-color_${getDotColor(
            seatsLeft
          )}`}
        >
          {seatsLeft === 0
            ? 'Регистрация завершена'
            : `осталось ${seatsLeft} ${getSeatWord(seatsLeft)}`}
        </p>
      )}
    </div>
  );
}

export default EventStatus;

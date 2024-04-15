import './StatusBar.css';

/**
 * Event card status bar
 * @param {string} city - string - city of the event
 * @param {number} seatsLeft - number - number of remaining seats
 * @param {string} status - string - event current status, 'upcoming', 'live' or 'complete'
 * @param {string} format - string - event format 'online' or 'online+offline'
 * @param {string} textColor - string - text color, possible options 'white' or 'black'
 */
function StatusBar({ city, seatsLeft, status, format, textColor }) {
  function getDotColor(seatsLeft) {
    if (typeof seatsLeft !== 'number' || seatsLeft <= 5) {
      return 'red';
    }
    if (seatsLeft > 5 && seatsLeft < 30) {
      return 'yellow';
    }
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
    <div className={`status-bar `} style={{ color: `${textColor}` }}>
      {format === 'online+offline' && city && (
        <p className="status-bar__text status-bar__text_type_city">{city}</p>
      )}
      <p className="status-bar__text status-bar__text_type_online">онлайн</p>
      {format === 'online+offline' && status === 'upcoming' && seatsLeft > 0 && (
        <p
          className={`status-bar__text status-bar__text_type_seats-left status-bar__text_dot-color_${getDotColor(
            seatsLeft
          )}`}
        >
          {`осталось ${seatsLeft} ${getSeatWord(seatsLeft)}`}
        </p>
      )}
    </div>
  );
}

export default StatusBar;

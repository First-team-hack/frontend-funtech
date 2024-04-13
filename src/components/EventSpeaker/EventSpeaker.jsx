import './EventSpeaker.css';

function EventSpeaker({ speaker }) {
  return (
    <li className="event-speaker">
      <img className="event-speaker__photo" src={speaker?.photo} alt="Фотография ведущего" />
      <h3 className="event-speaker__name">{`${speaker?.firstName} ${speaker?.lastName}`}</h3>
      <h4 className="event-speaker__position">{`${speaker?.position}`}</h4>
      <p className="event-speaker__about">{speaker?.about}</p>
    </li>
  );
}

export default EventSpeaker;

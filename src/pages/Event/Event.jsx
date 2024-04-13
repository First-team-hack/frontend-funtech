import './Event.css';
import EventCard from '../../components/EventCard/EventCard';
import { useLocation } from 'react-router-dom';
import EventSpeaker from './EventSpeaker/EventSpeaker';
import { mockSpeakerData } from '../../utils/mock-data';

function Event() {
  const location = useLocation();
  const event = location.state;

  // console.log(mockSpeakerData);
  return (
    <main className="event">
      <section className="event__container">
        <div className="event__header">
          <EventCard event={event} cardSize="medium"></EventCard>
          <div
            className="event__description"
            aria-label="В прошлом году мы говорили о том, как управлять собой, командой, проектом, компанией — и не поседеть к тридцати годам. В этот раз обсудим подход к карьере и жизни, а главное — как оставаться счастливыми на работе."
          />
        </div>
        <div
          className="event__subtitle"
          aria-label="Yet Another Level - это серия митапов про жизнь в IT-индустрии. Саморазвитие, прокачка софт-скилов, карьера, управление в IT, нетворкинг и многое другое."
        />
        <section className="event__info">
          <ul className="event__info-list">
            <li className="event__info-item">
              <h3 className="event__info-title">
                <span className="event__info-title event__info-title_bold">01/</span> Где:
              </h3>
              <p className="event__info-text">{`${event?.city}, ${event?.address}, а ещё можно присоединиться онлайн — всем зарегистрированным отправим ссылку на трансляцию.`}</p>
            </li>
            <li className="event__info-item">
              <h3 className="event__info-title">
                <span className="event__info-title event__info-title_bold">02/</span> Когда:
              </h3>
              <p className="event__info-text">{`${event?.date.toLocaleString('default', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}`}</p>
            </li>
            <li className="event__info-item">
              <h3 className="event__info-title">
                <span className="event__info-title event__info-title_bold">03/</span> Как:
              </h3>
              <p className="event__info-text">
                Участие бесплатное, но нужно зарегистрироваться.Трансляция будет доступна всем
                желающим.
              </p>
            </li>
          </ul>
        </section>
        <section className="event__speakers">
          <h2 className="event__speakers-title event__section-title">Ведущие мероприятия</h2>
          <ul className="event__speakers-list">
            {mockSpeakerData.map((speaker) => (
              <EventSpeaker key={speaker.id} speaker={speaker} />
            ))}
          </ul>
        </section>
        <section className="event__program">
          <h2 className="event__program-title event__section-title">Программа</h2>
        </section>
      </section>
    </main>
  );
}

export default Event;

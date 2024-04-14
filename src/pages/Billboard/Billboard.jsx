import './Billboard.css';
import FilterBar from '../../components/FilterBar/FilterBar';
import bannerImg from '../../assets/banner.png';
import { Grid } from '@mui/material';
import { mockCardsData } from '../../utils/mock-data';
import EventCard from '../../components/EventCard/EventCard';
import { useEffect, useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import useEvent from '../../providers/EventProvider/EventProvider.hook';

function Billboard() {
  const { events, getEvents } = useEvent();
  const recommendedEvents = mockCardsData;
  const completedEvents = mockCardsData;
  const [visibleEvent, setVisibleEvents] = useState(8);
  const showMoreEvents = () => {
    setVisibleEvents((prev) => prev + 8);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <main className="billboard">
      <div className="billboard__container">
        <FilterBar />
        <img className="billboard__banner" src={bannerImg} alt="" />
        <section className="billboard__section">
          <h2 className="billboard__section-title">В ближайшее время</h2>
          {events.length === 0 ? (
            <div className="billboard__events-not-found">Ничего не найдено</div>
          ) : (
            <>
              <Grid container spacing="20px">
                {events.slice(0, visibleEvent).map((event) => (
                  <Grid key={event.id} item xs={3}>
                    <EventCard event={event} cardSize="small" />
                  </Grid>
                ))}
              </Grid>
              {visibleEvent < events.length && (
                <CustomButton
                  variant="outlined"
                  onClick={showMoreEvents}
                  sx={{ width: '194px', height: '40px', fontSize: '24px' }}
                >
                  Открыть еще
                </CustomButton>
              )}
            </>
          )}
        </section>
        <section className="billboard__section">
          <h2 className="billboard__section-title">Рекомендованые Вам</h2>
          <Grid container spacing="20px">
            {recommendedEvents.slice(0, 1).map((event) => (
              <Grid key={event.id} item xs={3}>
                <EventCard event={event} cardSize="small" />
              </Grid>
            ))}
          </Grid>
        </section>
        <section className="billboard__section">
          <h2 className="billboard__section-title">Завершенные мероприятия</h2>
          <Grid container spacing="20px">
            {completedEvents.slice(0, 2).map((event) => (
              <Grid key={event.id} item xs={6}>
                <EventCard event={event} cardSize="large" />
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    </main>
  );
}

export default Billboard;

import './Billboard.css';
import FilterBar from '../../components/FilterBar/FilterBar';
import bannerImg from '../../assets/banner.png';
import { Grid } from '@mui/material';
import EventCard from '../../components/EventCard/EventCard';
import { useEffect, useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import useEvent from '../../providers/EventProvider/EventProvider.hook';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';

function Billboard() {
  const { filteredEvents, getFilteredEvents, completedEvents, getCompletedEvents } = useEvent();
  const { isLoggedIn, recommendedEvents } = useProfile();
  const [visibleEvent, setVisibleEvents] = useState(8);
  const showMoreEvents = () => {
    setVisibleEvents((prev) => prev + 8);
  };

  useEffect(() => {
    // when page load first time we fetch events with empty filters so we get all events
    getFilteredEvents();
    getCompletedEvents();
  }, []);

  return (
    <main className="billboard">
      <div className="billboard__container">
        <FilterBar />
        <img className="billboard__banner" src={bannerImg} alt="" />
        <section className="billboard__section">
          <h2 className="billboard__section-title">В ближайшее время</h2>
          {filteredEvents.length === 0 ? (
            <div className="billboard__events-not-found">Мероприятия не найдены</div>
          ) : (
            <>
              <Grid container spacing="20px">
                {filteredEvents.slice(0, visibleEvent).map((event) => (
                  <Grid key={event.id} item xs={3}>
                    <EventCard event={event} cardSize="small" />
                  </Grid>
                ))}
              </Grid>
              {visibleEvent < filteredEvents.length && (
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
        {isLoggedIn && (
          <section className="billboard__section">
            <h2 className="billboard__section-title">Рекомендованые Вам</h2>
            <Grid container spacing="20px">
              {recommendedEvents.map((event) => (
                <Grid key={event.id} item xs={3}>
                  <EventCard event={event} cardSize="small" />
                </Grid>
              ))}
            </Grid>
          </section>
        )}
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

import './Billboard.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FilterBar from '../../components/FilterBar/FilterBar';
import bannerImg from '../../assets/banner.png';
import { Grid } from '@mui/material';
import { cardsData } from '../../utils/mock-data';
import EventCard from '../../components/EventCard/EventCard';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

function Billboard() {
  const allEvents = cardsData;
  const recommendedEvents = cardsData;
  const completedEvents = cardsData;
  const [visibleEvent, setVisibleEvents] = useState(8);
  const showMoreEvents = () => {
    setVisibleEvents((prev) => prev + 8);
  };

  return (
    <main className="billboard">
      <div className="billboard__container">
        <Breadcrumbs />
        <FilterBar />
        <img className="billboard__banner" src={bannerImg} alt="" />
        <section className="billboard__section">
          <h2 className="billboard__section-title">В ближайшее время</h2>
          <Grid container spacing="20px">
            {allEvents.slice(0, visibleEvent).map((card) => (
              <Grid key={card.id} item xs={3}>
                <EventCard {...card} cardSize="small" buttonText="зарегистрироваться" />
              </Grid>
            ))}
          </Grid>
          {visibleEvent < allEvents.length && (
            <CustomButton
              variant="outlined"
              onClick={showMoreEvents}
              sx={{ width: '194px', height: '40px', fontSize: '24px' }}
            >
              Открыть еще
            </CustomButton>
          )}
        </section>
        <section className="billboard__section">
          <h2 className="billboard__section-title">Рекомендованые Вам</h2>
          <Grid container spacing="20px">
            {recommendedEvents.slice(0, 4).map((card) => (
              <Grid key={card.id} item xs={3}>
                <EventCard {...card} cardSize="small" buttonText="зарегистрироваться" />
              </Grid>
            ))}
          </Grid>
        </section>
        <section className="billboard__section">
          <h2 className="billboard__section-title">Завершенные мероприятия</h2>
          <Grid container spacing="20px">
            {completedEvents.slice(0, 2).map((card) => (
              <Grid key={card.id} item xs={6}>
                <EventCard {...card} cardSize="large" buttonText="зарегистрироваться" />
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    </main>
  );
}

export default Billboard;

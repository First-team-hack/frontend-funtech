import './EventsTab.css';
import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import globalTheme from '../../themes/globalTheme';
import { Grid } from '@mui/material';
import EventCard from '../EventCard/EventCard';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';

function EventsTab() {
  const { registeredEvents } = useProfile();

  const expectedEvents = registeredEvents.filter((event) => Date.now() - event.date.getTime() < 0);
  const completedEvents = registeredEvents.filter((event) => Date.now() - event.date.getTime() > 0);

  const [currentTab, setCurrentTab] = useState('expected');
  const buttonStyles = {
    width: '630px',
    height: '80px',
    borderRadius: '20px',
    fontSize: '20px',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.10);',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <section className="events-tab">
      <div className="events-tab__list">
        <CustomButton
          sx={{
            ...buttonStyles,
            backgroundColor:
              currentTab === 'expected'
                ? globalTheme.palette.colorStrokeAccent
                : globalTheme.palette.colorCardBackgroundWhite,
            color:
              currentTab === 'expected'
                ? globalTheme.palette.colorCardBackgroundWhite
                : globalTheme.palette.colorTextPrimary,
          }}
          onClick={() => setCurrentTab('expected')}
        >
          <span className="events-tab__button-icon events-tab__button-icon_type_expected" />
          {`Ожидаемые мероприятия (${expectedEvents.length})`}
        </CustomButton>
        <CustomButton
          sx={{
            ...buttonStyles,
            backgroundColor:
              currentTab === 'completed'
                ? globalTheme.palette.colorStrokeAccent
                : globalTheme.palette.colorCardBackgroundWhite,
            color:
              currentTab === 'completed'
                ? globalTheme.palette.colorCardBackgroundWhite
                : globalTheme.palette.colorTextPrimary,
          }}
          onClick={() => setCurrentTab('completed')}
        >
          <span className="events-tab__button-icon events-tab__button-icon_type_completed" />
          {`Завершенные мероприятия (${completedEvents.length})`}
        </CustomButton>
      </div>
      <section className="events-tab__cards-section">
        <h2 className="events-tab__cards-section-title">
          {currentTab === 'expected' ? 'Ожидаемые мероприятия' : 'Завершенные мероприятия'}
        </h2>
        <Grid container spacing="20px">
          {currentTab === 'expected'
            ? expectedEvents.map((card) => (
                <Grid key={card.id} item xs={3}>
                  <EventCard {...card} cardSize="small" buttonText="зарегистрироваться" />
                </Grid>
              ))
            : completedEvents.map((card) => (
                <Grid key={card.id} item xs={3}>
                  <EventCard {...card} cardSize="small" buttonText="зарегистрироваться" />
                </Grid>
              ))}
        </Grid>
      </section>
    </section>
  );
}

export default EventsTab;

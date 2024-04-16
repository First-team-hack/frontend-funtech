import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
import './Favorites.css';
import { Grid } from '@mui/material';
import EventCard from '../../components/EventCard/EventCard';
function Favorites() {
  const { favoriteEvents } = useProfile();
  return (
    <main className="favorites">
      <div className="favorites__container">
        <h2 className="favorites__title">Избранные мероприятия</h2>
        {favoriteEvents.length === 0 ? (
          <div className="favorites__title-not-found">Нет избранных мероприятий</div>
        ) : (
          <Grid container spacing="20px">
            {favoriteEvents.map((event) => (
              <Grid key={event.id} item xs={3}>
                <EventCard event={event} cardSize="small" />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </main>
  );
}

export default Favorites;

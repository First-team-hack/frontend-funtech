import './Main.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FilterBar from '../../components/FilterBar/FilterBar';
import EventCard from '../../components/EventCard/EventCard';
import { Stack } from '@mui/material';
import { cardData } from '../../utils/mock-data';

function Main() {
  return (
    <main className="main">
      <Breadcrumbs />
      <FilterBar />
      <Stack direction="row" spacing={2} sx={{ margin: '20px 0' }}>
        <EventCard
          cardSize="small"
          colorTheme="blue"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="small"
          colorTheme="black"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="small"
          colorTheme="white"
          {...cardData}
          buttonText="зарегистрироваться"
        />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ margin: '20px 0' }}>
        <EventCard
          cardSize="medium"
          colorTheme="blue"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="medium"
          colorTheme="black"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="medium"
          colorTheme="white"
          {...cardData}
          buttonText="зарегистрироваться"
        />
      </Stack>
      <Stack spacing={2} sx={{ margin: '20px 0' }}>
        <EventCard
          cardSize="large"
          colorTheme="blue"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="large"
          colorTheme="black"
          {...cardData}
          buttonText="зарегистрироваться"
        />
        <EventCard
          cardSize="large"
          colorTheme="white"
          {...cardData}
          buttonText="зарегистрироваться"
        />
      </Stack>
    </main>
  );
}

export default Main;

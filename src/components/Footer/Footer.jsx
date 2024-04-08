import { Stack } from '@mui/material';
import Subscribe from './Subscribe/Subscribe';
import AboutUs from './AboutUs/AboutUs';

function Footer() {
  return (
    <Stack direction="row" sx={{ width: '1440px', margin: '0 auto' }}>
      <Subscribe />
      <AboutUs />
    </Stack>
  );
}

export default Footer;

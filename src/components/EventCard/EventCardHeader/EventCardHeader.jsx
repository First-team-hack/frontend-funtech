import { IconButton, Stack } from '@mui/material';
import { ShareOutlined } from '@mui/icons-material';
import EventStatus from './EventStatus/EventStatus';
function EventCardHeader(props) {
  const { city, seatsLeft, isOnline, colorTheme, cardSize } = props;
  return (
    <Stack
      className="text"
      sx={{
        mb: cardSize === 'small' ? '8px' : cardSize === 'medium' ? '28px' : '16px',
        color: colorTheme?.card.textColor,
        transition: 'all ease-in-out 0.15s',
      }}
      direction="row"
    >
      {cardSize === 'medium' && (
        <IconButton
          disableRipple
          sx={[
            {
              height: '16px',
              fontSize: '13px',
              color: colorTheme?.card.textColor,
              padding: '0',
              marginRight: '64px',
            },
            () => ({
              '&:hover': { color: colorTheme?.card.shareColorHover },
            }),
          ]}
        >
          <ShareOutlined fontSize="13px" sx={{ marginRight: '8px' }} />
          Поделиться меропрятием
        </IconButton>
      )}
      <EventStatus
        isOnline={isOnline}
        city={city}
        seatsLeft={seatsLeft}
        onlySeats={cardSize === 'medium'}
      />
    </Stack>
  );
}

export default EventCardHeader;

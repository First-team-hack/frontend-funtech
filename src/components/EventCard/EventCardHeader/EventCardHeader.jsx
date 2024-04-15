import { IconButton, Stack } from '@mui/material';
import { ShareOutlined } from '@mui/icons-material';
import StatusBar from './StatusBar/StatusBar';
function EventCardHeader(props) {
  const { city, seatsLeft, colorTheme, format, status, cardSize, isOnline } = props;
  return (
    <Stack
      className="text"
      sx={{
        mb: cardSize === 'small' ? '8px' : cardSize === 'medium' ? '28px' : '16px',
        color: colorTheme?.card.textColor,
        transition: 'all ease-in-out 0.15s',
      }}
      direction="row"
      useFlexGap
      spacing={'8px'}
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
              marginRight: '0px',
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
      <StatusBar
        status={status}
        format={format}
        city={city}
        seatsLeft={seatsLeft}
        isOnline={isOnline}
      />
    </Stack>
  );
}

export default EventCardHeader;

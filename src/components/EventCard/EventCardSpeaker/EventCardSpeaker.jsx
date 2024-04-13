import { Typography } from '@mui/material';

function EventCardSpeaker(props) {
  const { colorTheme, cardSize, children } = props;

  let chosenSizes;
  switch (cardSize) {
    case 'large': {
      chosenSizes = {
        maxWidth: '164px',
        lineHeight: '16px',
        fontSize: '13px',
        minHeight: '64px',
      };
      break;
    }
    case 'medium': {
      chosenSizes = {
        maxWidth: '305px',
        minHeight: '130px',
        fontSize: '24px',
        lineHeight: '32px',
      };
      break;
    }
    case 'small':
    default: {
      chosenSizes = {
        maxWidth: '164px',
        minHeight: '50px',
        fontSize: '12px',
        lineHeight: '16px',
      };
      break;
    }
  }
  return (
    <Typography
      variant={cardSize === 'medium' ? 'body2' : 'body1'}
      className="text"
      color={colorTheme?.card.textColor}
      sx={{
        transition: 'all ease-in-out 0.15s',
        ...chosenSizes,
      }}
    >
      {children}
    </Typography>
  );
}

export default EventCardSpeaker;

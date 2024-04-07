import { Typography } from '@mui/material';

function EventCardDate(props) {
  const { colorTheme, cardSize, children } = props;

  let chosenSizes;
  switch (cardSize) {
    case 'large': {
      chosenSizes = {
        fontSize: '12px',
        marginRight: '6px',
      };
      break;
    }
    case 'medium': {
      chosenSizes = {
        fontSize: '16px',
        marginRight: '20px',
      };
      break;
    }
    case 'small':
    default: {
      chosenSizes = {
        fontSize: '12px',
        marginBottom: '12px',
      };
      break;
    }
  }
  return (
    <Typography
      className={`text ${cardSize !== 'small' ? 'date' : ''}`}
      color={colorTheme?.card.textColor}
      sx={{
        maxWidth: '164px',
        transition: 'all ease-in-out 0.15s',
        ...chosenSizes,
      }}
    >
      {children}
    </Typography>
  );
}

export default EventCardDate;

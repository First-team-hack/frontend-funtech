import { Typography } from '@mui/material';

function EventCardTitle(props) {
  const { colorTheme, cardSize, children } = props;

  let chosenSizes;
  switch (cardSize) {
    case 'large': {
      chosenSizes = {
        fontSize: '32px',
        lineHeight: '35px',
        minHeight: '140px',
        maxWidth: '250px',
      };
      break;
    }
    case 'medium': {
      chosenSizes = {
        fontSize: '32px',
        lineHeight: '35px',
        minHeight: '140px',
        maxWidth: '310px',
      };
      break;
    }
    case 'small':
    default: {
      chosenSizes = {
        minHeight: '100px',
        maxWidth: '250px',
      };
      break;
    }
  }
  return (
    <Typography
      className="text"
      variant="h3"
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

export default EventCardTitle;

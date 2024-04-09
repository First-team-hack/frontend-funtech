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
        maxWidth: '450px',
      };
      break;
    }
    case 'medium': {
      chosenSizes = {
        fontSize: '32px',
        lineHeight: '35px',
        minHeight: '140px',
        maxWidth: '400px',
      };
      break;
    }
    case 'small':
    default: {
      chosenSizes = {
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
        flexGrow: '1',
        transition: 'all ease-in-out 0.15s',
        ...chosenSizes,
      }}
    >
      {children}
    </Typography>
  );
}

export default EventCardTitle;

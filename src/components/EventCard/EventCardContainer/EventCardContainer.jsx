import { Stack } from '@mui/material';

function EventCardContainer(props) {
  const { colorTheme, cardSize, children } = props;

  let chosenStyles, chosenStateStyles;
  switch (cardSize) {
    case 'large': {
      chosenStyles = {
        padding: '16px 12px 31px',
        backgroundSize: '220px 220px',
        backgroundPosition: '95% 50%',
        cursor: 'pointer',
        backgroundOrigin: 'border-box',
      };
      chosenStateStyles = () => ({
        '& .date': {
          width: '104px',
          height: '32px',
          border: '1px solid',
          borderColor: colorTheme?.card.dateBorderColor,
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all ease-in-out 0.15s',
        },
        '&:hover': {
          backgroundColor: colorTheme?.card.backgroundColorHover,
          '& .button': {
            backgroundColor: colorTheme?.card.buttonBackgroundColor,
            color: colorTheme?.card.textColorHover,
            borderColor: colorTheme?.card.textColorHover,
          },
          '& .button:hover': {
            backgroundColor: colorTheme?.card.buttonBackgroundColorHover,
          },
          '& .button:disabled': {
            backgroundColor: colorTheme?.button.disabled.backgroundColor,
          },
          '& .text': {
            color: colorTheme?.card.textColorHover,
            borderColor: colorTheme?.card.textColorHover,
          },
        },
      });
      break;
    }
    case 'medium': {
      chosenStyles = {
        padding: '32px',
        backgroundSize: '200px 200px',
        backgroundPosition: '95% 70%',
        backgroundOrigin: 'border-box',
      };
      chosenStateStyles = () => ({
        '& .date': {
          width: '104px',
          height: '32px',
          border: '1px solid',
          borderColor: colorTheme?.card.dateBorderColor,
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all ease-in-out 0.15s',
        },
      });
      break;
    }
    case 'small':
    default: {
      chosenStyles = {
        padding: '16px 12px 12px',
        backgroundSize: '150px 150px',
        backgroundPosition: '95% 70%',
        cursor: 'pointer',
      };
      chosenStateStyles = () => ({
        '&:hover': {
          backgroundColor: colorTheme?.card.backgroundColorHover,
          '& .button': {
            backgroundColor: colorTheme?.card.buttonBackgroundColor,
            color: colorTheme?.card.textColorHover,
            borderColor: colorTheme?.card.textColorHover,
          },
          '& .button:hover': {
            backgroundColor: colorTheme?.card.buttonBackgroundColorHover,
          },
          '& .button:disabled': {
            backgroundColor: colorTheme?.button.disabled.backgroundColor,
          },
          '& .text': {
            color: colorTheme?.card.textColorHover,
          },
        },
      });
      break;
    }
  }
  return (
    <Stack
      direction="column"
      sx={[
        {
          flexGrow: '1',
          backgroundImage: colorTheme?.card.backgroundImageSrc,
          backgroundColor: colorTheme?.card.backgroundColorBasic,
          backgroundRepeat: 'no-repeat',
          transition: 'all ease-in-out 0.15s',
          ...chosenStyles,
        },
        chosenStateStyles,
      ]}
    >
      {children}
    </Stack>
  );
}

export default EventCardContainer;

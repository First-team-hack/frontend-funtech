import { Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

function EventCardButton({ sx, role = '', isActive, colorTheme, onClick, ...props }) {
  const buttonBasicStyles = {
    ...colorTheme?.basic,
    fontFamily: `'YS Text', 'Arial', sans-serif`,
    borderRadius: '16px',
    transition: 'all ease-in-out 0.15s',
    ...sx,
  };
  const buttonStateStyles = () => ({
    '&:hover': {
      ...colorTheme?.hover,
      boxShadow: 'none',
    },
    '&:focus-visible': {
      ...colorTheme?.focus,
      boxShadow: 'none',
    },
    '&:disabled': {
      ...colorTheme?.disabled,
    },
    '&:disabled:hover': {
      ...colorTheme?.disabledHover,
    },
  });

  const onButtonClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return role === 'like' ? (
    <IconButton
      {...props}
      onClick={onButtonClick}
      className="button"
      disableFocusRipple
      sx={[
        {
          width: '32px',
          height: '32px',
          border: '1px solid',
          marginLeft: '5px',
          ...buttonBasicStyles,
        },
        buttonStateStyles,
      ]}
    >
      {isActive ? (
        <Favorite sx={{ fontSize: '22px' }} />
      ) : (
        <FavoriteBorderOutlined sx={{ fontSize: '22px' }} />
      )}
    </IconButton>
  ) : (
    <Button
      {...props}
      onClick={onClick}
      className="button"
      disableFocusRipple
      variant="outlined"
      sx={[
        {
          padding: '2px 5px 0',
          height: '32px',
          fontSize: '12px',
          fontWeight: '400',
          ...buttonBasicStyles,
        },
        buttonStateStyles,
      ]}
    ></Button>
  );
}

export default EventCardButton;

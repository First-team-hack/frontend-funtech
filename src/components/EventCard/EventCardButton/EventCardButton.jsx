import { Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

function EventCardButton({ sx, role = '', isActive, colorTheme, ...props }) {
  const buttonBasicStyles = {
    ...colorTheme?.basic,
    fontFamily: `'YS Text', 'Arial', sans-serif`,
    borderRadius: '8px',
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
  });

  return role === 'like' ? (
    <IconButton
      {...props}
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
      {isActive ? <Favorite /> : <FavoriteBorderOutlined />}
    </IconButton>
  ) : (
    <Button
      {...props}
      className="button"
      disableFocusRipple
      variant="outlined"
      sx={[
        {
          padding: '0 5px',
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

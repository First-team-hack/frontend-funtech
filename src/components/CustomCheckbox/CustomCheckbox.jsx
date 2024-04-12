import Checkbox from '@mui/material/Checkbox';
import globalTheme from '../../themes/globalTheme';
import React from 'react';

const CustomCheckbox = React.forwardRef((props, ref) => {
  return (
    <Checkbox
      {...props}
      ref={ref}
      sx={{
        width: '40px',
        height: '40px',
        alignSelf: 'center',
        color: globalTheme.palette.colorInputBorder,
        '&.Mui-checked': {
          color: globalTheme.palette.colorStrokeAccent,
        },
        ...props.sx,
      }}
    />
  );
});

export default CustomCheckbox;

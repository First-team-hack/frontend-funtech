import Checkbox from '@mui/material/Checkbox';
import globalTheme from '../../themes/globalTheme';

function CustomCheckbox(props) {
  return (
    <Checkbox
      {...props}
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
}

export default CustomCheckbox;

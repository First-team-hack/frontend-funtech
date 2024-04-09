import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import globalTheme from '../../themes/globalTheme';

/**
 * This wrapper component for MUI Select with custom design.
 * @param {string} items string array of select items,or you can add select items(prefer: MUI MenuItem) just like component children
 * @param {object} sx object with external styles. For example {width: '80px', height '40px', borderRadius: '8px'}.
 * @param {string} placeholder placeholder text inside select element
 * @param {string} label text above select element
 * @param {object} props the rest of the props are the same as in the native select
 */

function CustomSelect(props) {
  const { items = [], children, sx, placeholder = '', label = '', required, defaultValue } = props;
  const labelStyles = {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
  };
  const selectStyles = [
    {
      borderRadius: '50px',
      width: '250px',
      height: '40px',
      backgroundColor: globalTheme.palette.colorInputBackground,
      ...sx,
    },
    {
      '& .MuiSelect-select': {
        paddingRight: 4,
        paddingLeft: 2,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: 'fit-content',
      }}
    >
      {label && (
        <label style={{ color: globalTheme.palette.colorInputLabelText, ...labelStyles }}>
          {required && (
            <span style={{ color: globalTheme.palette.colorStrokeNegative, ...labelStyles }}>
              *
            </span>
          )}
          {label}
        </label>
      )}
      <Select
        {...props}
        sx={selectStyles}
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
        }}
        defaultValue={defaultValue || ''}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <em
                style={{
                  ...labelStyles,
                  fontSize: '16px',
                  color: globalTheme.palette.colorInputLabelText,
                }}
              >
                {placeholder}
              </em>
            );
          }
          return selected;
        }}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item || ''}>
            {item}
          </MenuItem>
        ))}
        {children}
      </Select>
    </div>
  );
}

export default CustomSelect;

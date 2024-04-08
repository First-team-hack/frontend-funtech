import { InputBase, InputLabel, Stack, Typography } from '@mui/material';
import globalTheme from '../../themes/globalTheme';
import React from 'react';

/**
 * Custom input base on MUI InputBase https://mui.com/material-ui/api/input-base/
 * @param {string} label label text
 * @param {string} errormessage error message under input
 * @param {boolean} noValidate if true disabled input error styles and hide error message so that it does not affect the height
 * @param {string} required if set to 'true' add red '*' before label
 * @param {string} multiline if true, a textarea elemet is rendered
 * @param {number} rows number of rows to display when multiline option is set to true.
 * @param {object} sxlabel external label styles (example { fontSize: '20px'}).
 * @param {number} sxerror external label styles (example { fontSize: '20px'}).
 * @returns
 */
const CustomInput = React.forwardRef((props, ref) => {
  const { label, errormessage, noValidate, required, sx, sxlabel, sxerror, multiline } = props;
  return (
    <Stack direction="column" spacing="8px" useFlexGap sx={{ width: 'fit-content' }}>
      {label && (
        <InputLabel
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            color: globalTheme.palette.colorInputLabelText,
            ...sxlabel,
          }}
          htmlFor={props.id}
        >
          {required && (
            <Typography
              component="span"
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                color: globalTheme.palette.colorInputError,
              }}
            >
              *
            </Typography>
          )}
          {label}
        </InputLabel>
      )}
      <InputBase
        {...props}
        error={Boolean(errormessage) && !noValidate}
        ref={ref}
        sx={[
          {
            width: '305px',
            padding: '3px 12px',
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid',
            borderRadius: multiline ? '22px' : '50px',
            borderColor: globalTheme.palette.colorInputBorder,
            backgroundColor: globalTheme.palette.colorInputBackground,
            ...sx,
          },
          () => ({
            '&.Mui-error': {
              backgroundColor: globalTheme.palette.colorInputErrorBackground,
              borderColor: globalTheme.palette.colorInputError,
            },
            '& > .MuiInputBase-inputMultiline': {
              overflow: 'hidden',
            },
          }),
        ]}
      ></InputBase>
      {!noValidate && (
        <Typography
          sx={{
            color: globalTheme.palette.colorInputError,
            margin: '0',
            fontSize: '13px',
            lineHeight: '16px',
            minHeight: '16px',
            ...sxerror,
          }}
        >
          {errormessage}
        </Typography>
      )}
    </Stack>
  );
});

export default CustomInput;

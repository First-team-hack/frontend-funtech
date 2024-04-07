import { Button } from '@mui/material';
import globalTheme from '../../themes/globalTheme';
/**
 * This wrapper component for MUI Button with custom design.
 * @param {object} sx object with external styles. For example {width: '80px', height '40px', borderRadius: '8px'}.
 * @param {string} variant  if variant = 'outlined' button style change to outlined , else button has contained style
 */

function CustomButton(props) {
  const { sx, children, variant } = props;
  const styles =
    variant === 'outlined'
      ? [
          {
            borderColor: globalTheme.palette.colorCustomButtonPrimary,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20px',
            boxShadow: 'none',
            textTransform: 'none',
            color: globalTheme.palette.colorCustomButtonPrimary,
            ...sx,
          },
          () => ({
            '&:hover': {
              backgroundColor: globalTheme.palette.colorCustomButtonPrimary,
              boxShadow: 'none',
              color: globalTheme.palette.colorCustomButtonText,
            },
            '&:focus    ': {
              backgroundColor: globalTheme.palette.colorCustomButtonPrimary,
              boxShadow: 'none',
              color: globalTheme.palette.colorCustomButtonText,
            },
            '&:disabled': {
              backgroundColor: 'inherit',
              color: globalTheme.palette.colorCustomButtonDisabled,
              borderColor: globalTheme.palette.colorCustomButtonDisabled,
            },
          }),
        ]
      : [
          {
            backgroundColor: globalTheme.palette.colorCustomButtonPrimary,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20px',
            boxShadow: 'none',
            textTransform: 'none',
            color: globalTheme.palette.colorCustomButtonText,
            ...sx,
          },
          () => ({
            '&:hover': {
              backgroundColor: globalTheme.palette.colorCustomButtonSecondary,
              boxShadow: 'none',
            },
            '&:disabled': {
              backgroundColor: globalTheme.palette.colorCustomButtonDisabled,
              color: globalTheme.palette.colorCustomButtonText,
            },
          }),
        ];

  return (
    <Button {...props} sx={styles} variant={variant}>
      {children}
    </Button>
  );
}

export default CustomButton;

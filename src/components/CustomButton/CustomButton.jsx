import { Button } from '@mui/material';
import colors from '../../utils/colors';
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
            borderColor: colors.colorCustomButtonPrimary,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20px',
            boxShadow: 'none',
            color: colors.colorCustomButtonPrimary,
            ...sx,
          },
          () => ({
            '&:hover': {
              backgroundColor: colors.colorCustomButtonPrimary,
              boxShadow: 'none',
              color: colors.colorCustomButtonText,
            },
            '&:focus    ': {
              backgroundColor: colors.colorCustomButtonPrimary,
              boxShadow: 'none',
              color: colors.colorCustomButtonText,
            },
            '&:disabled': {
              backgroundColor: 'inherit',
              color: colors.colorCustomButtonDisabled,
              borderColor: colors.colorCustomButtonDisabled,
            },
          }),
        ]
      : [
          {
            backgroundColor: colors.colorCustomButtonPrimary,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20px',
            boxShadow: 'none',
            color: colors.colorCustomButtonText,
            ...sx,
          },
          () => ({
            '&:hover': {
              backgroundColor: colors.colorCustomButtonSecondary,
              boxShadow: 'none',
            },
            '&:disabled': {
              backgroundColor: colors.colorCustomButtonDisabled,
              color: colors.colorCustomButtonText,
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

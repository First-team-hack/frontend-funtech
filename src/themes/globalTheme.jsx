import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
  typography: {
    body1: {
      fontFamily: `'YS Text', 'Arial', sans-serif`,
      fontWeight: 400,
    },
    body2: {
      fontFamily: `'YS Text', 'Arial', sans-serif`,
      fontWeight: 500,
    },
    h1: {
      fontFamily: `'YS Display', 'Arial', sans-serif`,
      fontSize: '34px',
      fontWeight: 500,
    },
    h2: {
      fontFamily: `'YS Display', 'Arial', sans-serif`,
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '32px',
    },
    h3: {
      fontFamily: `'YS Display', 'Arial', sans-serif`,
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
    },
  },
  palette: {
    colorText: '#000',
    colorTextPrimary: '#2c2d2e',
    colorTextSecondary: '#99a2ad',
    colorTextSecondaryContrast: '#524a3e',

    colorIconBackground: '#efefef',
    colorIconBackgroundPositive: '#0dc268',
    colorIconBackgroundNeutral: '#ff9e00',

    colorInputBorder: '#d3d9de',
    colorInputBackground: '#f7f8fa',
    colorInputLabelText: '#6f7985',
    colorInputError: '#e64646',
    colorInputErrorBackground: '#faebeb',
    colorInputPlaceholder: '#aeb7c2',
    colorInputSeparator: '#d9dadc',

    colorCustomButtonPrimary: '#1d6bf3',
    colorCustomButtonSecondary: '#5A9BFF',
    colorCustomButtonDisabled: '#B5B5B7',
    colorCustomButtonText: '#fff',

    colorCardBackGroundBlack: '#1a1b22',
    colorCardTextBlack: '#2C2D2E',
    colorCardButtonBorderBlack: '#2C2D2E',

    colorCardBackgroundWhite: '#fff',
    colorCardBackgroundHover: '#2D3945',
    colorCardHoverButtonHover: '#87898f',

    colorFooterBackground: '#f6f6f6',

    //card themes
    themeBlueCardBackground: '#1d6bf3',
    themeBlueCardBackgroundHover: '#2D3945',
    themeBlueText: '#fff',
    themeBlueButtonBackgroundHover: '#5A9BFF',
    themeBlueButtonBackgroundCardHoverButtonHover: '#87898f',
    themeBlueButtonBackgroundDisabled: '#B5B5B7',

    themeBlackCardBackground: '#1a1b22',
    themeBlackCardBackgroundHover: '#2D3945',
    themeBlackText: '#fff',
    themeBlackButtonBackgroundCardHoverButtonHover: '#87898f',
    themeBlackButtonBackgroundDisabled: '#B5B5B7',

    themeWhiteCardBackground: '#fff',
    themeWhiteCardBackgroundHover: '#2D3945',
    themeWhiteButtonBackgroundCardHoverButtonHover: '#87898f',
    themeWhiteText: '#2C2D2E',
    themeWhiteButtonBackgroundDisabled: '#B5B5B7',

    /* stroke */
    colorSeparatorPrimary: '#dadce0',
    colorSeparatorPrimaryAlpha: '#e0e2e7',
    colorSeparatorSecondary: '#e6e7eb',
    colorImageBorderAlpha: '#ebecf0',
    colorFieldBorderAlpha: '#e0e2e7',
    colorStrokeAccent: '#005ff9',
    colorStrokeContrast: '#fff',
    colorStrokeNegative: '#ed0a34',
    colorStrokePositive: '#0dc268',

    /* states */
    colorBackgroundAccentHover: '#005cf1',
    colorBackgroundAccentActive: '#0059ea',
    colorBackgroundAccentHoverThemed: '#005cf1',
    colorBackgroundAccentActiveThemed: '#0059ea',
    colorIconAccentHover: '#005cf1',
    colorIconAccentActive: '#0059ea',
    colorIconTertiaryHover: '#c7c9d0',
    colorIconTertiaryActive: '#bec2ca',
    colorBackgroundSecondaryHover: '#e6e8ec',
    colorBackgroundSecondaryActive: '#dddfe4',
    colorBackgroundSecondaryAlphaHover: '#e6e8ec',
    colorBackgroundSecondaryAlphaActive: '#dbdde4',
    colorBackgroundPositiveHover: '#0cbb66',
    colorBackgroundPositiveActive: '#0cb465',
    colorBackgroundNegativeHover: '#e40a34',
    colorBackgroundNegativeActive: '#da0a35',
    colorTransparentHover: '#f5f6f7',
    colorTransparentActive: '#ebecf0',
    colorBackgroundContrastHover: '#f5f5f7',
    colorBackgroundContrastActive: '#ebecef',
    colorBackgroundContrastAlphaHover: '#fff',
    colorBackgroundContrastAlphaActive: '#fff',
    colorBackgroundAccentTintThemedAlphaHover: '#dce5ff',
    colorBackgroundAccentTintThemedAlphaActive: '#dce5ff',
  },
});

export default globalTheme;

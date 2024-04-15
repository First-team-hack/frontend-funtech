import globalTheme from './globalTheme';
import bg_image_1 from '../assets/backgrounds/card_bg_1.svg';
import bg_image_2 from '../assets/backgrounds/card_bg_2.png';
import bg_image_3 from '../assets/backgrounds/card_bg_3.png';

const cardThemeBlue = {
  card: {
    backgroundColorBasic: globalTheme.palette.themeBlueCardBackground,
    backgroundColorHover: globalTheme.palette.themeBlueCardBackgroundHover,
    buttonBackgroundColor: globalTheme.palette.themeBlueCardBackgroundHover,
    buttonBackgroundColorHover: globalTheme.palette.themeBlueButtonBackgroundCardHoverButtonHover,
    textColor: globalTheme.palette.themeBlueText,
    textColorHover: globalTheme.palette.themeBlueText,
    shareColorHover: globalTheme.palette.themeBlueButtonBackgroundCardHoverButtonHover,
    dateBorderColor: globalTheme.palette.themeBlueText,
    backgroundImageSrc: `url(${bg_image_1})`,
  },
  button: {
    // basic
    basic: {
      backgroundColor: globalTheme.palette.themeBlueCardBackground,
      borderColor: globalTheme.palette.themeBlueText,
      color: globalTheme.palette.themeBlueText,
    },

    //hover
    hover: {
      backgroundColor: globalTheme.palette.themeBlueButtonBackgroundHover,
      borderColor: globalTheme.palette.themeBlueText,
      color: globalTheme.palette.themeBlueText,
    },
    //focus
    focus: {
      backgroundColor: globalTheme.palette.themeBlueButtonBackgroundHover,
      borderColor: globalTheme.palette.themeBlueText,
      color: globalTheme.palette.themeBlueText,
    },

    //disabled
    disabled: {
      backgroundColor: 'inherit',
      borderColor: globalTheme.palette.themeBlueText,
      color: globalTheme.palette.themeBlueText,
    },
  },
};

const cardThemeBlack = {
  card: {
    backgroundColorBasic: globalTheme.palette.themeBlackCardBackground,
    backgroundColorHover: globalTheme.palette.themeBlackCardBackgroundHover,
    buttonBackgroundColor: globalTheme.palette.themeBlackCardBackgroundHover,
    buttonBackgroundColorHover: globalTheme.palette.themeBlackButtonBackgroundCardHoverButtonHover,
    textColor: globalTheme.palette.themeBlackText,
    textColorHover: globalTheme.palette.themeBlackText,
    shareColorHover: globalTheme.palette.themeBlackButtonBackgroundCardHoverButtonHover,
    dateBorderColor: globalTheme.palette.themeBlackText,
    backgroundImageSrc: `url(${bg_image_2})`,
  },
  button: {
    // basic
    basic: {
      backgroundColor: globalTheme.palette.themeBlackCardBackground,
      borderColor: globalTheme.palette.themeBlackText,
      color: globalTheme.palette.themeBlackText,
    },

    //hover
    hover: {
      backgroundColor: globalTheme.palette.themeBlackButtonBackgroundCardHoverButtonHover,
      borderColor: globalTheme.palette.themeBlackText,
      color: globalTheme.palette.themeBlackText,
    },
    //focus
    focus: {
      backgroundColor: globalTheme.palette.themeBlackButtonBackgroundCardHoverButtonHover,
      borderColor: globalTheme.palette.themeBlackText,
      color: globalTheme.palette.themeBlackText,
    },

    //disabled
    disabled: {
      backgroundColor: 'inherit',
      borderColor: globalTheme.palette.themeBlackText,
      color: globalTheme.palette.themeBlackText,
    },
  },
};

const cardThemeWhite = {
  card: {
    backgroundColorBasic: globalTheme.palette.themeWhiteCardBackground,
    backgroundColorHover: globalTheme.palette.themeWhiteCardBackgroundHover,
    buttonBackgroundColor: globalTheme.palette.themeWhiteCardBackgroundHover,
    buttonBackgroundColorHover: globalTheme.palette.themeWhiteButtonBackgroundCardHoverButtonHover,
    textColor: globalTheme.palette.themeWhiteText,
    textColorHover: globalTheme.palette.themeWhiteCardBackground,
    shareColorHover: globalTheme.palette.themeWhiteButtonBackgroundCardHoverButtonHover,
    dateBorderColor: globalTheme.palette.themeWhiteText,
    backgroundImageSrc: `url(${bg_image_3})`,
  },
  button: {
    // basic
    basic: {
      backgroundColor: globalTheme.palette.themeWhiteCardBackground,
      borderColor: globalTheme.palette.themeWhiteText,
      color: globalTheme.palette.themeWhiteText,
    },

    //hover
    hover: {
      backgroundColor: globalTheme.palette.themeWhiteButtonBackgroundCardHoverButtonHover,
      borderColor: globalTheme.palette.themeWhiteCardBackground,
      color: globalTheme.palette.themeWhiteCardBackground,
    },
    //focus
    focus: {
      backgroundColor: globalTheme.palette.themeWhiteButtonBackgroundCardHoverButtonHover,
      borderColor: globalTheme.palette.themeWhiteCardBackground,
      color: globalTheme.palette.themeWhiteCardBackground,
    },

    //disabled
    disabled: {
      backgroundColor: 'inherit',
      borderColor: globalTheme.palette.themeWhiteText,
      color: globalTheme.palette.themeWhiteText,
    },
  },
};

export { cardThemeBlue, cardThemeBlack, cardThemeWhite };

const colors = {
  white: '#FFFFFF',
  darkerWhite: '#F4F6FA',
  black: '#000000',
  lighterBlack: "#323237",
  gray: '#868686',
  darkGray: '#5C5C5D',
  lightGray: '#E8E8E8',
  red: '#BE4E35',
  green: '#6FB46E',
}

export const theme = {
  backgroundColor: {
    linearPrimary: colors.lighterBlack,
    linearSecondary: colors.black,
  },
  componentColor: {
    primary: colors.white, //white
    secondary: colors.darkGray, // grey
    darkerPrimary: colors.darkerWhite, //darkerWhite
    darkerSecondary: colors.lightGray, //lightGrey
    error: colors.red, // red
    success: colors.green, //green
  },
  fontColor: {
    primary: colors.white,
    secondary: colors.gray,
    invertedPrimary: colors.black,
  },
  fontSize: {
    xxl: '42px',
    xl: '34px',
    l: '24px',
    xm: '18px',
    m: '16px',
    s: '14px',
    xs: '12px',
  },
};

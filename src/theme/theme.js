export const theme = {
  media: {
    phone: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },
  fonts: {
    main: {
      regular: 'Manrope-Regular', // <== font-family //  400
      medium: 'Manrope-Medium', // <== font-family //  500
      semiBold: 'Manrope-SemiBold', // <== font-family //  600
      bold: 'Manrope-Bold', // font-family <== //  700
      extraBold: 'Manrope-ExtraBold', // font-family <== //  800
    },
    secondary: {
      regular: 'Inter-Regular', // <== font-family //  400
      medium: 'Inter-Medium', // <== font-family //  500
    },
  },
  colors: {
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111',
    blue: '#54ADFF',
    blueLight: '#CCE4FB',
    green: '#00C3AD',
    grey: '#888',
    red: '#F43F5E',
    blueGradient: 'linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)',
  },
  boxShadow: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  fontSizes: {
    xs: '12px', // font-size: 12px
    sm: '14px', // font-size: 14px
    md: '16px', // font-size: 16px
    lg: '20px', // font-size: 20px
    xl: '24px', // font-size: 24px
    xxl: '28px', // font-size: 28px
    xxxl: '32px', // font-size: 32px
    huge: '48px', // font-size: 48px
    gigantic: '68px', // font-size: 68px
  },
};

import { createTheme, Color } from '@mui/material';
import React from 'react';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import Montserrat from '../assets/fonts/Montserrat-SemiBold.ttf';
import { Theme } from '@mui/material/styles';

type ColorPartial = Partial<Color>;
declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}
declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorPartial {}
}
const fontFaceMontserratMedium = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
};
const fontFaceMontserratBold = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
};
const fontFaceMontserrat = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
};

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    caption2: React.CSSProperties;
  }

  interface TypographyOptions {
    caption2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
}

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      main: '#0B6D62',
      light: '#30A193',
      '300': '#4ABAAD',
      '500': '#1B877A',
      '100': '#B3FFF6',
    },
    grey: {
      '100': '#F7F7F7',

      '200': '#E9EBE9',
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',

      disabled: '#94A196',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            fontFaceMontserratBold,
            fontFaceMontserrat,
            fontFaceMontserratMedium,
          ],
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    allVariants: {
      color: '#373C38',
    },
    overline: {
      gammaOverlineFontFamily: 'Comic Sans Ms ',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '14px',
      identicalToBoxHeightOr117LetterSpacing: '0.005em',
      betaTextHighEmphasisColor: '#343446',
    },
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '48px',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '30px',
    },
    h3: {
      fontSize: '20px',
      fontFamily: 'Montserrat',
      fontWeight: 500,
      lineHeight: '30px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '22px',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '22px',
    },
    caption: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    caption2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  neutralShade: {
    '300': 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
    '200': 'linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)',
    '400': '#E8FFFC',
    '500': '#E7FCE0',
    '100': '#F5FFF7',
    '600': '#77EDDF',
    '700': '#FFFFFF',
    '800': '#E5E5E5',
  },
  primary: {
    '400': '#30A193',
    '1000': '#EFFFFD',
  },

  grey: {
    '400': '#D6D6D6',
  },
  accent: {
    '100': '#ED8F02',
    '200': '#FF725E',
  },
  text: {
    primary: '#373C38',
  },
};

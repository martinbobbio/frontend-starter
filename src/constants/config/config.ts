// Assets
import { logoMBDark, logoMBLight } from '@/assets';

const BRANDING = {
  logo: {
    light: logoMBLight,
    dark: logoMBDark,
  },
};

const BASIC_COLORS = {
  primary: {
    main: '#313bac',
  },
  secondary: {
    main: '#f50057',
  },
  white: {
    main: '#ffffff',
  },
  black: {
    main: '#0b0c18',
  },
  gray: {
    main: '#6b7688',
  },
};

const FONT_SIZES = {
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '24px',
  xxl: '30px',
};

const LINE_HEIGHTS = {
  sm: '20px',
  md: '22px',
  lg: '26px',
  xl: '32px',
  xxl: '38px',
};

const FONT_WEIGHTS = {
  low: 400,
  medium: 700,
  high: 1000,
};

const BOX_SHADOWS = {
  low: '0 2px 4px rgba(0, 0, 0, 0.2)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
  high: '0 8px 10px rgba(0, 0, 0, 0.4)',
};

export default {
  branding: BRANDING,
  theme: {
    fontSize: FONT_SIZES,
    lineHeight: LINE_HEIGHTS,
    fontWeight: FONT_WEIGHTS,
    boxShadow: BOX_SHADOWS,
    light: {
      palette: {
        ...BASIC_COLORS,
        header: {
          main: 'hsla(0,0%,100%,.25)',
          border: 'hsla(0,0%,100%,.18);',
        },
        body: {
          main: '#edf2f8;',
        },
        card: {
          main: '#ffffff',
        },
        typhography: {
          main: '#030303',
        },
      },
    },
    dark: {
      palette: {
        ...BASIC_COLORS,
        header: {
          main: 'rgba(0, 0, 0, 0.25)',
          border: 'hsla(0, 0%, 5%, 0.18)',
        },
        body: {
          main: '#191624',
        },
        card: {
          main: '#0b0c18',
        },
        typhography: {
          main: '#edf2f8',
        },
      },
    },
  },
};

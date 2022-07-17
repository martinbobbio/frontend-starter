import {Theme, ThemeStruct, ThemeType} from '@types';

const lightTheme: Theme = {
  id: 'light',
  fontFamily: 'Lato',
  colors: {
    primary: '#15A560',
    secondary: '#26263F',
    black: '#242424',
    white: '#FFFFFF',
    gray: '#D8D9E2',
    lightgray: '#757575',
    error: '#E81F37',
  },
  shadows: {
    sm: '0px 4px 50px rgba(55, 55, 68, 5%)',
    md: '0px 4px 8px rgba(55, 55, 68, 5%)',
    lg: '0px 4px 30px rgba(55, 55, 68, 10%)',
  },
  buttons: {
    primary: {
      color: '#26263F',
      background: '#64FFB5',
      hover: '#A8FFD5',
      pressed: '#F0FFF8',
      disabled: '#E4F1EB',
    },
    secondary: {
      color: '#53FFAD',
      background: '#26263F',
      hover: '#515165',
      pressed: '#6E6E86',
      disabled: '#A5A7AF',
    },
  },
};

const darkTheme: Theme = {
  ...lightTheme,
  id: 'dark',
};

const getCurrentTheme = (): ThemeType => {
  if (typeof jest !== 'undefined') {
    return 'light';
  }
  if (localStorage.getItem('theme') === 'dark') {
    return 'dark';
  } else if (localStorage.getItem('theme') === 'light') {
    return 'light';
  } else {
    return 'light';
  }
};

export const theme: ThemeStruct = {
  dark: darkTheme,
  light: lightTheme,
  current: getCurrentTheme(),
};

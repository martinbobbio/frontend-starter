/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components';

interface MyTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    white: {
      main: string;
    };
    black: {
      main: string;
    };
    gray: {
      main: string;
    };
    elements: {
      header: {
        main: string;
        border: string;
      };
    };
    default: {
      main: string;
      background1: string;
      background2: string;
    };
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}

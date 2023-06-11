/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components';

// Define la interfaz o tipo para tu tema personalizado
interface MyTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
  };
  // Agrega otras propiedades según tus necesidades
}

// Extiende el tipo `DefaultTheme` con tu tema personalizado
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}

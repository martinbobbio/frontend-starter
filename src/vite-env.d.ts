/// <reference types="vite/client" />

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
  export interface DefaultTheme extends MyTheme {}
}

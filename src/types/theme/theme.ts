export type Theme = {
    id: string;
    fontFamily: string;
    colors: {
        primary: string;
        secondary: string;
        white: string;
        black: string;
        gray: string;
        lightgray: string;
        error: string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
    };
    buttons: {
        primary: {
            color: string;
            background: string;
            hover: string;
            pressed: string;
            disabled: string;
        },
        secondary: {
            color: string;
            background: string;
            hover: string;
            pressed: string;
            disabled: string;
        },
    },
};

export type ThemeType = 'light' | 'dark'

export type ThemeStruct = {
    dark: Theme;
    light: Theme;
    current: ThemeType;
}

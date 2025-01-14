import {createContext} from "react";

export enum Theme{
    LIGHT='light',
    DARK='dark'
}

export interface ThemeContext0Props{
    theme?: Theme;
    setTheme?: (theme:Theme) => void
}

export const ThemeContext=createContext<ThemeContext0Props>({})

export const LOCAL_STORAGE_THEME_KEY='theme';
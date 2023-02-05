import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    changeTheme: () => void;
    theme: Theme;
}

export function useTheme():UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        const { DARK, LIGHT } = Theme

        const newTheme = theme === DARK ? LIGHT : DARK

        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        changeTheme
    }
}
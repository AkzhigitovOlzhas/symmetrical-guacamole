import { ThemeContext, THEME, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  theme: THEME;
  togleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const togleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    togleTheme,
  };
}

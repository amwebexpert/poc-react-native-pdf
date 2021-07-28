import React, { createContext, FC, useCallback, useContext, useState } from 'react';

export type ContextThemeType = {
  isThemeDark: boolean;
  toggleTheme: () => void;
};

const defaultValue: ContextThemeType = {
  isThemeDark: true,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeContextProvider: FC = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  const toggleTheme = useCallback(() => {
    setIsThemeDark(dark => !dark);
  }, []);

  return <ThemeContext.Provider value={{ isThemeDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);

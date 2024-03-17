import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { storage } from '../utils';

interface ThemeContextType {
  theme: ColorSchemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {

  const [theme, setTheme] = useState<ColorSchemeName>('light');

  useEffect(() => {
    // Load the saved theme from MMKV
    const loadTheme =  () => {
      const storedTheme =  storage.getString('theme');
      if (storedTheme !== null) {
        setTheme(storedTheme as ColorSchemeName);
      } else {
        const defaultTheme = Appearance.getColorScheme() || 'light';
        setTheme(defaultTheme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme =  () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
     storage.set('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

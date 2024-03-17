import {darkColors, lightColors} from '../constants/Colors';
import {useTheme} from '../context/ThemeContext';

export const useThemeColor = () => {
  const {theme} = useTheme();

  const Colors = theme === 'light' ? lightColors : darkColors;

  return {theme, Colors};
};

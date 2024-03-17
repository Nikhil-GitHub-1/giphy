// src/components/ThemeToggler.tsx
import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useThemeColor } from '../hooks/useThemeColor';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const {Colors} = useThemeColor();
  return <Switch tintColor={Colors.bgColor} thumbColor={Colors.primary} value={theme === 'dark'} onValueChange={toggleTheme} />;
};

// src/components/ThemeToggler.tsx
import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return <Switch value={theme === 'dark'} onValueChange={toggleTheme} />;
};

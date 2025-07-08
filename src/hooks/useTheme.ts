import { useState } from 'react';

export const useTheme = () => {
  const [isDark] = useState(true); // Always dark mode

  const toggleTheme = () => {
    // No-op since we're always in dark mode
  };

  return { isDark, toggleTheme };
};
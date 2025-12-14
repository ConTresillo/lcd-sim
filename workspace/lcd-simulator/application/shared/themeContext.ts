// application/shared/themeContext.ts
import { createContext, useContext } from 'react';
import type { Theme } from '../../infrastructure/themes/Theme';
import { neonBlue } from '../../infrastructure/themes/neonBlue';

// Create context
export const ThemeContext = createContext<Theme>(neonBlue);

// Hook for consuming the theme
export const useTheme = () => useContext(ThemeContext);

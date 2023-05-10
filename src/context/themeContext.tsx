import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";
import { themes } from "../styles/themes";

// type of one form instance
export type ThemeInstance = Record<string, string>;

// context to get current theme
const ThemeContext = createContext<ThemeInstance | null>(null);

// context to select another theme
const ThemeUpdateContext = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

// theme wrapper
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // select first theme from themes array as default theme
  const [themeOrder, setThemeOrder] = useState(0);
  const selectedTheme = themes[themeOrder];

  return (
    <ThemeContext.Provider value={selectedTheme}>
      <ThemeUpdateContext.Provider value={setThemeOrder}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

// hooks to get current theme and change
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

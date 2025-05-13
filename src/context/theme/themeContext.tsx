// ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { useColorScheme } from "react-native";
import { ThemeContextType } from "../../config/theme-type";
import { darkTheme, lightTheme } from "../../styles/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null
  // Get the current color scheme from the device
  // This will be 'light' or 'dark' based on the user's device settings
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

// Custom hook for consuming the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

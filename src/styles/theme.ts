// theme.ts

import { FontSizeType, ThemeType } from "../config/type/ui-type/theme-type";

export const fontSize: FontSizeType = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
};

// This file defines the light and dark themes for the application.
export const lightTheme: ThemeType = {
  dark: false,
  colors: {
    // Define the colors used in the light theme
    background: {
      primary: "#F9F9F6",
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#F9F9F6",
    },
    btn: {
      primary: "#84996B",
      secondary: "#E1E8D6",
    },
    btnText: {
      primary: "#FFFFFF",
      secondary: "#4D5E3E",
    },
    icon: {
      active: "#356a40",
      inactive: "#9E9E9E",
      primary: "#356a40",
      secondary: "#F9F9F6",
    },
  },
  // Define the font sizes used in the theme
  fontSize: fontSize,
};

export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    background: {
      primary: "#F9F9F6",
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#F9F9F6",
    },
    btn: {
      primary: "#84996B",
      secondary: "#E1E8D6",
    },
    btnText: {
      primary: "#FFFFFF",
      secondary: "#4D5E3E",
    },
    icon: {
      active: "#356a40",
      inactive: "#E1E8D6",
      primary: "#356a40",
      secondary: "#F9F9F6",
    },
  },
  // Define the font sizes used in the theme
  fontSize: fontSize,
};

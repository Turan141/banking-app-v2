import { createTheme } from "@mui/material";
import { lightThemeOptions } from "./lightTheme";
import { darkThemeOptions } from "./darkTheme";

// Define your shared components
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        userSelect: "none",
        overscrollBehavior: "contain",
      },
    },
  },
};

// Define common typography options
const commonTypography = {
  typography: {
    fontFamily: "SF Pro Display, Arial, sans-serif",
  } as CustomTypographyOptions,
};

// Define common palette values
const commonPalette = {
  light: lightThemeOptions,
  dark: darkThemeOptions,
} as any;

// Create light theme
export const lightTheme: any = createTheme({
  palette: {
    ...commonPalette.light,
  } as any,
  components: components,
  ...commonTypography,
} as any);

// Create dark theme
export const darkTheme: any = createTheme({
  palette: {
    ...commonPalette.dark,
  }as any,
  components: components,
  ...commonTypography,
} as any);

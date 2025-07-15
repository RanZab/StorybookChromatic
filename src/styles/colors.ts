// Color tokens extracted from Figma, grouped by category with title and description for each group

export type ColorGroup = {
  title: string;
  description: string;
  colors: { [token: string]: string };
};

export const colorGroups: { [group: string]: ColorGroup } = {
  primary: {
    title: "Primary Colors",
    description: "Main brand colors used for primary actions and highlights.",
    colors: {
      100: "#F1FF6C",
      300: "#E5FF00",
      500: "#B9D300",
      700: "#3F3F2B",
      900: "#333333",
    },
  },
  neutral: {
    title: "Neutral Colors",
    description: "Grayscale palette for backgrounds, borders, and text.",
    colors: {
      0: "#FFFFFF",
      100: "#F0F0F0",
      200: "#BABABA",
      300: "#8E8E8E",
      400: "#5D5D5D",
      500: "#404040",
      600: "#333333",
      700: "#282828",
      800: "#181818",
      900: "#010101",
    },
  },
  alert: {
    title: "Alert Colors",
    description: "Colors for error and critical states.",
    colors: {
      100: "#FF6161",
      300: "#FF3131",
      500: "#B72C2C",
      900: "#8E1616",
    },
  },
  warning: {
    title: "Warning Colors",
    description: "Colors for warning and caution states.",
    colors: {
      100: "#FFCE66",
      300: "#FFAE00",
      500: "#B27A00",
      700: "#805700",
    },
  },
  success: {
    title: "Success Colors",
    description: "Colors for success and positive states.",
    colors: {
      100: "#00E5A0",
      300: "#00B27C",
      500: "#007F58",
    },
  },
  white: {
    title: "White",
    description: "White color swatch, used for backgrounds and surfaces.",
    colors: {
      "92%": "#FFFFFF",
    },
  },
}; 
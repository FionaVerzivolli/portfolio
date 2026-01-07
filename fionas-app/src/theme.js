import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      lineHeight: 1.1,
      "@media (max-width:600px)": {
        fontSize: "2.4rem",
      },
    },
    h2: {
      fontSize: "2.6rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2.1rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.15rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.85rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#6366f1",
      light: "#a5b4fc",
      dark: "#4f46e5",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
    divider: "#e5e7eb",
    success: {
      main: "#16a34a",
      light: "#4ade80",
      dark: "#15803d",
    },
    info: {
      main: "#0ea5e9",
      light: "#38bdf8",
      dark: "#0284c7",
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
    },
    error: {
      main: "#ef4444",
      light: "#f97373",
      dark: "#dc2626",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          padding: "8px 20px",
          boxShadow: "none",
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111827",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 1px 4px rgba(15, 23, 42, 0.06)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 1px 4px rgba(15, 23, 42, 0.06)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.8rem",
          borderRadius: 999,
        },
      },
    },
  },
});

export const commonStyles = {
  glassmorphism: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 1px 6px rgba(15, 23, 42, 0.06)",
  },

  gradientText: {
    color: "#2563eb",
    fontWeight: 600,
  },

  // Not using a bunch of these anymore
  hoverEffect: {},
  cardHover: {},
  fadeInUp: {},
  fadeInLeft: {},
  fadeInRight: {},
  pulse: {},
  float: {},
  glow: {},
  gradientBorder: {
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
  },

  typingEffect: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  particleEffect: {
    position: "relative",
  },
};

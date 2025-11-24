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
      main: "#2563eb", // Sleek blue
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#6366f1", // Subtle indigo accent
      light: "#a5b4fc",
      dark: "#4f46e5",
    },
    background: {
      default: "#f5f7fb", // Soft neutral background
      paper: "#ffffff",
    },
    text: {
      primary: "#111827", // Slate/dark gray
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
          transition: "background-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.18)",
          },
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

// Common styles that can be reused – simplified & de-vibed
export const commonStyles = {
  // Former "glassmorphism", now a clean card/container
  glassmorphism: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 1px 6px rgba(15, 23, 42, 0.06)",
  },

  // Former gradientText: now just uses primary color
  gradientText: {
    color: "#2563eb",
    fontWeight: 600,
  },

  // Subtle hover with no scale/floating
  hoverEffect: {
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    "&:hover": {
      boxShadow: "0 4px 12px rgba(15, 23, 42, 0.10)",
      transform: "translateY(-2px)",
    },
  },

  // Cleaner card hover, no borders changing color
  cardHover: {
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 18px rgba(15, 23, 42, 0.12)",
    },
  },

  // Keep a single subtle animation utility if you still want it
  fadeInUp: {
    animation: "fadeInUp 0.3s ease-out forwards",
  },
  fadeInLeft: {
    animation: "fadeInLeft 0.3s ease-out forwards",
  },
  fadeInRight: {
    animation: "fadeInRight 0.3s ease-out forwards",
  },

  // Removed “floaty” vibe – now just a subtle emphasis style
  pulse: {
    outline: "2px solid rgba(37, 99, 235, 0.15)",
    outlineOffset: "2px",
  },

  // No float animation at all anymore
  float: {
    // intentionally left minimal – no animation
  },

  // Glow is now a very subtle focus ring
  glow: {
    boxShadow: "0 0 0 1px rgba(37, 99, 235, 0.25)",
    "&:hover": {
      boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.35)",
    },
  },

  // Former gradientBorder, now just a clean neutral border
  gradientBorder: {
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
  },

  // Typing effect simplified: no animated caret
  typingEffect: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  // Particle effect stripped of animation & decoration
  particleEffect: {
    position: "relative",
  },
};

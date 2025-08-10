import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Modern indigo
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899', // Modern pink
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f0f23', // Deep dark blue
      paper: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#f8fafc',
      secondary: 'rgba(248, 250, 252, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 15, 35, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.8rem',
        },
      },
    },
  },
});

// Common styles that can be reused
export const commonStyles = {
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  hoverEffect: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
    },
  },
  cardHover: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
    },
  },
  // New animation styles
  fadeInUp: {
    animation: 'fadeInUp 0.8s ease-out forwards',
  },
  fadeInLeft: {
    animation: 'fadeInLeft 0.8s ease-out forwards',
  },
  fadeInRight: {
    animation: 'fadeInRight 0.8s ease-out forwards',
  },
  pulse: {
    animation: 'pulse 2s infinite',
  },
  float: {
    animation: 'float 3s ease-in-out infinite',
  },
  glow: {
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
    '&:hover': {
      boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
    },
  },
  gradientBorder: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '20px',
      padding: '2px',
      background: 'linear-gradient(135deg, #6366f1, #ec4899)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 1,
    },
  },
  typingEffect: {
    overflow: 'hidden',
    borderRight: '2px solid #6366f1',
    whiteSpace: 'nowrap',
    animation: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
  },
  particleEffect: {
    position: 'relative',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: '#6366f1',
      animation: 'particle 2s infinite',
    },
    '&::before': {
      top: '20%',
      left: '10%',
      animationDelay: '0s',
    },
    '&::after': {
      top: '60%',
      right: '10%',
      animationDelay: '1s',
    },
  },
};

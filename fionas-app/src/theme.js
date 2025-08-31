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
    mode: 'light',
    primary: {
      main: '#ff9ec7', // Cute bubblegum pink
      light: '#ffb3d1',
      dark: '#e68bb3',
    },
    secondary: {
      main: '#a8e6cf', // Soft mint green
      light: '#c4f0e1',
      dark: '#8dd3b8',
    },
    background: {
      default: '#fef7ff', // Very soft lavender white
      paper: 'rgba(255, 182, 193, 0.1)', // Light pink tint
    },
    text: {
      primary: '#5d4e75', // Soft purple-gray
      secondary: 'rgba(93, 78, 117, 0.7)',
    },
    divider: 'rgba(255, 182, 193, 0.2)', // Light pink dividers
    success: {
      main: '#ffd93d', // Sunny yellow
      light: '#ffe066',
      dark: '#e6c234',
    },
    info: {
      main: '#a8d8ea', // Soft sky blue
      light: '#c4e5f0',
      dark: '#8bc6d9',
    },
    warning: {
      main: '#ffb347', // Peach
      light: '#ffc266',
      dark: '#e69f3d',
    },
    error: {
      main: '#ff8a95', // Soft coral
      light: '#ffa8b0',
      dark: '#e67c86',
    },
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
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 182, 193, 0.2)',
          boxShadow: '0 2px 20px rgba(255, 158, 199, 0.1)',
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
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 182, 193, 0.3)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(255, 158, 199, 0.15)',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #ff9ec7 0%, #a8e6cf 50%, #ffd93d 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  hoverEffect: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 20px 40px rgba(255, 158, 199, 0.3)',
    },
  },
  cardHover: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(255, 158, 199, 0.3)',
      border: '1px solid rgba(255, 158, 199, 0.5)',
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
    boxShadow: '0 0 20px rgba(255, 158, 199, 0.4)',
    '&:hover': {
      boxShadow: '0 0 30px rgba(255, 158, 199, 0.6)',
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
      background: 'linear-gradient(135deg, #ff9ec7, #a8e6cf, #ffd93d)',
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
    borderRight: '2px solid #ff9ec7',
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
      background: '#ff9ec7',
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

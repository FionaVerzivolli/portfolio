import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container, Fade } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme, commonStyles } from "./theme";
import FloatingParticles from "./FloatingParticles";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const isActivePage = (page) => currentPage === page;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: "background.default", 
        color: "text.primary", 
        minHeight: "100vh",
        background: 'linear-gradient(135deg, #0f0f23 0%, #1e1b4b 50%, #0f0f23 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Modern Navbar */}
        <AppBar position="fixed" elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h6" 
              color="primary" 
              sx={{ 
                fontWeight: 700,
                fontSize: '1.5rem',
                cursor: 'pointer',
                ...commonStyles.gradientText,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
              onClick={() => setCurrentPage('home')}
            >
              Fiona Verzivolli
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 1,
              '& .MuiButton-root': {
                minWidth: 'auto',
                px: 2,
                py: 1,
                borderRadius: 20,
                fontSize: '0.9rem',
                fontWeight: 500,
                background: 'transparent',
                border: '1px solid transparent',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                },
                '&.active': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.5)',
                  color: '#6366f1',
                }
              }
            }}>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('home')}
                className={isActivePage('home') ? 'active' : ''}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('about')}
                className={isActivePage('about') ? 'active' : ''}
              >
                About
              </Button>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('projects')}
                className={isActivePage('projects') ? 'active' : ''}
              >
                Projects
              </Button>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('gallery')}
                className={isActivePage('gallery') ? 'active' : ''}
              >
                Gallery
              </Button>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('contact')}
                className={isActivePage('contact') ? 'active' : ''}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dynamic Content Area */}
        <Box sx={{ pt: 8 }}>
          <Fade in={true} timeout={500}>
            <Container maxWidth="xl" sx={{ py: 4 }}>
              {renderContent()}
            </Container>
          </Fade>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

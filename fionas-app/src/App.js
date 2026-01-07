import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme, commonStyles } from "./theme";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const isActivePage = (page) => currentPage === page;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: "background.default", 
        color: "text.primary", 
        minHeight: "100vh",
      }}>

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
              }}
              onClick={() => setCurrentPage('about')}
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
                '&.active': {
                  background: 'rgba(37, 99, 235, 0.1)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  color: '#2563eb',
                }
              }
            }}>
              <Button 
                color="inherit" 
                onClick={() => setCurrentPage('about')}
                className={isActivePage('about') ? 'active' : ''}
              >
                About
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
          <Container maxWidth="xl" sx={{ py: 4 }}>
            {renderContent()}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

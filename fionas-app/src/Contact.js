import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "@fontsource/poppins";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: { main: "#2196F3" },
    background: { default: "#121212", paper: "#1A1A1A" },
    text: { primary: "#ffffff", secondary: "#b0bec5" },
  },
});

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh" }}>
        
        {/* Navbar */}
        <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary">Fiona</Typography>
            <Box>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Contact Section */}
        <Container sx={{ py: 15, textAlign: "center", mt: 5 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">Contact Me</Typography>
          
          <Paper sx={{ p: 4, mt: 3, bgcolor: "#1E1E1E" }}>
            <Typography variant="body1" color="text.secondary">
              Feel free to reach out if you’d like to connect or collaborate! I am always open to making new friends :)
            </Typography>

            {/* Contact Details */}
            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body1" color="text.secondary">
                📍 Location: Toronto, Canada
              </Typography>
            </Box>
          </Paper>

          {/* Social Links */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
            <Button
              variant="outlined"
              color="primary"
              href="https://linkedin.com/in/fiona-verzivolli"
              target="_blank"
              sx={{ fontSize: "1.1rem", px: 3, py: 1 }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="https://github.com/FionaVerzivolli"
              target="_blank"
              sx={{ fontSize: "1.1rem", px: 3, py: 1 }}
            >
              GitHub
            </Button>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ textAlign: "center", py: 2, bgcolor: "#1A1A1A", mt: 5 }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Fiona Verzivolli. All Rights Reserved.
          </Typography>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default Contact;

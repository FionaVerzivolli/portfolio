import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "@fontsource/poppins";
import profileImage from "./images/profile.jpg"; // Import the image

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

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {/* Navbar */}
        <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary">Fiona</Typography>
            <Box>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3 }}>
          {/* Profile Image */}
          <Box
            component="img"
            src={profileImage} // Use the imported image
            alt="Profile"
            sx={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "5px solid rgba(33, 150, 243, 0.7)",
              boxShadow: "0px 0px 20px rgba(33, 150, 243, 0.5)",
              mr: 4,
            }}
          />
          <Box>
            <Typography variant="h3" color="primary" fontWeight="bold">Hi, I'm Fiona!</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: "70%" }}>
              A passionate Software Developer. Learn more about me in the top right!
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;

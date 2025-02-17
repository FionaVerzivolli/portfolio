import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Box, Button, Grid, Dialog } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

// Import images
import g1 from "./images/gallery/g1.jpg";
import g2 from "./images/gallery/g2.jpg";
import g3 from "./images/gallery/g3.jpg";
import g4 from "./images/gallery/g4.jpg";
import g5 from "./images/gallery/g5.jpg";
import g6 from "./images/gallery/g6.jpg";
import crab from "./images/gallery/crab.jpg";
import fish from "./images/gallery/fish.jpg";
import flowers from "./images/gallery/flowers.jpg";
import fruits from "./images/gallery/fruits.jpg";
import pufferfish from "./images/gallery/pufferfish.jpg";
import stadium from "./images/gallery/g20.jpg";
import baham from "./images/gallery/g21.jpg";
import baham2 from "./images/gallery/g22.jpg";
import bench from "./images/gallery/g23.jpg";
import bing from "./images/gallery/g24.jpg";
import shop from "./images/gallery/shop.jpg";
import building from "./images/gallery/building.jpg";
import out from "./images/gallery/out.jpg";
import street from "./images/gallery/street.jpg";
import boat from "./images/gallery/p3.jpg";
import p2 from "./images/gallery/p2.jpg";
import p1 from "./images/gallery/p1.jpg";

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

// **Predefined Order of Images**
const images = [g4, crab, p1, boat, shop, pufferfish, stadium, g1, out, g3, baham, bing, bench, flowers, street, p2, g6, fish, g2, fruits, building, baham2, g5];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

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
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Intro Section */}
        <Box sx={{ pt: 15, textAlign: "center" }}>
          <Typography variant="h4" color="primary" fontWeight="bold">Photo Gallery</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: "70%", mx: "auto" }}>
            My hobbies include taking photos of nature, architecture, and my drawings.
            This is a collection of moments and inspirations that reflect my passion for creativity.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontWeight: "bold" }}>
            Click on an image to see the full photo! Once open, you may scroll.
          </Typography>
        </Box>

        {/* Gallery Section */}
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={1} justifyContent="center">
            {images.map((src, index) => (
              <Grid 
                item 
                xs={12} sm={6} md={4}  
                key={index} 
                sx={{ display: "flex", aspectRatio: "1 / 1", cursor: "pointer" }} 
                onClick={() => handleOpen(src)}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)", boxShadow: "0px 4px 20px rgba(0,0,0,0.5)" }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Modal for Full Image */}
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Full Size"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}
        </Dialog>
    {/* Footer - Copyright Section */}
    <Box sx={{ textAlign: "center", py: 2, bgcolor: "#1A1A1A", mt: 5 }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Fiona Verzivolli. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Gallery;

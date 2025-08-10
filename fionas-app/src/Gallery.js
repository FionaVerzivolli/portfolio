import React, { useState } from "react";
import { Typography, Container, Box, Grid, Dialog, IconButton } from "@mui/material";
import { commonStyles } from "./theme";
import CloseIcon from '@mui/icons-material/Close';

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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Gallery Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography 
          variant="h2" 
          sx={{
            mb: 3,
            ...commonStyles.gradientText,
            ...commonStyles.fadeInUp,
            animationDelay: '0.2s',
            animationFillMode: 'both',
          }}
        >
          Photo Gallery
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            maxWidth: '800px',
            mx: 'auto',
            mb: 2,
            opacity: 0.8,
            lineHeight: 1.6,
            ...commonStyles.fadeInUp,
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          My hobbies include taking photos of nature, architecture, and my drawings.
          This is a collection of moments and inspirations that reflect my passion for creativity.
        </Typography>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={2} justifyContent="center">
        {images.map((src, index) => (
          <Grid 
            item 
            xs={12} sm={6} md={4} lg={3}
            key={index} 
            sx={{ 
              display: "flex", 
              aspectRatio: "1 / 1", 
              cursor: "pointer" 
            }} 
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
                borderRadius: "20px",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: 'relative',
                '&:hover': { 
                  transform: "scale(1.08) rotate(2deg)", 
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                  border: "2px solid rgba(99, 102, 241, 0.5)",
                  filter: 'brightness(1.1) contrast(1.1)',
                },
                ...commonStyles.fadeInUp,
                animationDelay: `${0.1 * index}s`,
                animationFillMode: 'both',
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal for Full Image */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(99, 102, 241, 0.3)',
                border: '1px solid rgba(99, 102, 241, 0.5)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Full Size"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: 'all 0.3s ease',
              }}
            />
          )}
        </Box>
      </Dialog>
    </Container>
  );
}

export default Gallery;

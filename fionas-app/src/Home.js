import React from "react";
import { Typography, Box, Container, Paper } from "@mui/material";
import { commonStyles } from "./theme";
import profileImage from "./images/friends.jpg";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Section with Modern Design */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", lg: "row" }, 
        alignItems: "center", 
        gap: 6, 
        minHeight: "80vh",
        justifyContent: "center"
      }}>
        {/* Profile Image with Modern Styling */}
        <Box sx={{ 
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Paper
            elevation={0}
            sx={{
              ...commonStyles.glassmorphism,
              ...commonStyles.gradientBorder,
              ...commonStyles.float,
              p: 3,
              ...commonStyles.hoverEffect,
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Fiona Verzivolli"
              sx={{
                width: { xs: 300, sm: 400, md: 450 },
                height: "auto",
                borderRadius: "20px",
                border: "3px solid rgba(255, 158, 199, 0.4)",
                boxShadow: "0 10px 30px rgba(255, 158, 199, 0.2)",
                transition: "all 0.3s ease",
                ...commonStyles.glow,
              }}
            />
          </Paper>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mt: 2, 
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "0.9rem",
              opacity: 0.8,
              ...commonStyles.fadeInUp,
              animationDelay: '0.5s',
              animationFillMode: 'both',
            }}
          >
            Me and my orangutan friend at the Toronto Zoo.
          </Typography>
        </Box>

        {/* Intro Section with Modern Typography */}
        <Box sx={{ 
          maxWidth: { xs: "100%", lg: "50%" },
          textAlign: { xs: "center", lg: "left" }
        }}>
          <Typography 
            variant="h1" 
            sx={{
              mb: 3,
              ...commonStyles.gradientText,
              ...commonStyles.fadeInLeft,
              animationDelay: '0.2s',
              animationFillMode: 'both',
            }}
          >
            Hi, I'm Fiona!
          </Typography>
          
          <Typography 
            variant="h4" 
            color="text.secondary" 
            sx={{ 
              mb: 4,
              fontWeight: 400,
              lineHeight: 1.4,
              opacity: 0.9,
              ...commonStyles.fadeInLeft,
              animationDelay: '0.4s',
              animationFillMode: 'both',
            }}
          >
            A passionate Software Engineer building the future, one line of code at a time.
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              opacity: 0.8,
              maxWidth: '600px',
              ...commonStyles.fadeInLeft,
              animationDelay: '0.6s',
              animationFillMode: 'both',
            }}
          >
            Currently interning at Shopify and working on innovative projects that make a real impact. 
            I love creating solutions that help others and push the boundaries of what's possible.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;

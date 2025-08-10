import React from "react";
import { Typography, Container, Box, Paper, Button } from "@mui/material";
import { commonStyles } from "./theme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Contact Header */}
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
          Contact Me
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            opacity: 0.8,
            lineHeight: 1.6,
            ...commonStyles.fadeInUp,
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          Feel free to reach out if you'd like to connect or collaborate! 
          I am always open to making new friends :)
        </Typography>
      </Box>

      {/* Contact Content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Contact Info Card */}
        <Paper
          elevation={0}
          sx={{
            ...commonStyles.glassmorphism,
            ...commonStyles.gradientBorder,
            p: 5,
            flex: { xs: '1', lg: '0 0 400px' },
            ...commonStyles.hoverEffect,
            ...commonStyles.fadeInLeft,
            animationDelay: '0.6s',
            animationFillMode: 'both',
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              textAlign: 'center',
              ...commonStyles.gradientText,
            }}
          >
            Let's Connect
          </Typography>
          
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 3,
            alignItems: 'center'
          }}>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                textAlign: 'center',
                opacity: 0.9,
                ...commonStyles.fadeInUp,
                animationDelay: '0.8s',
                animationFillMode: 'both',
              }}
            >
              📍 Location: Toronto, Canada
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                textAlign: 'center',
                opacity: 0.9,
                ...commonStyles.fadeInUp,
                animationDelay: '1.0s',
                animationFillMode: 'both',
              }}
            >
              🎓 University of Toronto
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                textAlign: 'center',
                opacity: 0.9,
                ...commonStyles.fadeInUp,
                animationDelay: '1.2s',
                animationFillMode: 'both',
              }}
            >
              💼 Software Engineer Intern at Shopify
            </Typography>
          </Box>
        </Paper>

        {/* Social Links Card */}
        <Paper
          elevation={0}
          sx={{
            ...commonStyles.glassmorphism,
            ...commonStyles.gradientBorder,
            p: 5,
            flex: { xs: '1', lg: '0 0 400px' },
            ...commonStyles.hoverEffect,
            ...commonStyles.fadeInRight,
            animationDelay: '0.8s',
            animationFillMode: 'both',
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              textAlign: 'center',
              ...commonStyles.gradientText,
            }}
          >
            Social Links
          </Typography>
          
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 3,
            alignItems: 'center'
          }}>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/fiona-verzivolli"
              target="_blank"
              sx={{
                fontSize: "1.1rem",
                px: 4,
                py: 2,
                borderRadius: '16px',
                border: '2px solid rgba(99, 102, 241, 0.3)',
                color: '#6366f1',
                background: 'rgba(99, 102, 241, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                ...commonStyles.fadeInUp,
                animationDelay: '1.0s',
                animationFillMode: 'both',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '2px solid rgba(99, 102, 241, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                }
              }}
            >
              LinkedIn
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/FionaVerzivolli"
              target="_blank"
              sx={{
                fontSize: "1.1rem",
                px: 4,
                py: 2,
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                color: 'text.secondary',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                ...commonStyles.fadeInUp,
                animationDelay: '1.2s',
                animationFillMode: 'both',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              GitHub
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;

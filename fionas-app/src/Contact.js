import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import { commonStyles } from "./theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const socialButtonSx = {
    fontSize: "0.95rem",
    px: 3,
    py: 1.2,
    borderRadius: 999,
    textTransform: "none",
    minWidth: 220,
    justifyContent: "center",
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Contact Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            ...commonStyles.gradientText,
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            opacity: 0.8,
            lineHeight: 1.6,
            mb: 6,
          }}
        >
          Feel free to reach out if you'd like to connect or collaborate!
          <br />
          I&apos;m always open to meeting new people.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Social Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/fiona-v"
            target="_blank"
            sx={socialButtonSx}
          >
            LinkedIn
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/FionaVerzivolli"
            target="_blank"
            sx={socialButtonSx}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;

import React from "react";
import { Typography, Container, Box, Paper, Button } from "@mui/material";
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
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Contact Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            ...commonStyles.gradientText,
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          Feel free to reach out if you'd like to connect or collaborate.
          I&apos;m always open to meeting new people.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            ...commonStyles.glassmorphism,
            ...commonStyles.cardHover,
            p: 4,
            flex: { xs: "1", lg: "0 0 380px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            Let&apos;s Connect
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1rem", textAlign: "center" }}
            >
              Location: Toronto, Canada
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1rem", textAlign: "center" }}
            >
              University of Toronto
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1rem", textAlign: "center" }}
            >
              Prev. Software Engineer Intern at Shopify
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            ...commonStyles.glassmorphism,
            ...commonStyles.cardHover,
            p: 4,
            flex: { xs: "1", lg: "0 0 380px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            Social Links
          </Typography>

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
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;

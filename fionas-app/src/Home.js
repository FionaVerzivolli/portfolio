import React from "react";
import { Typography, Box, Container, Paper } from "@mui/material";
import { commonStyles } from "./theme";
import profileImage from "./images/friends.jpg";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          gap: 6,
          minHeight: "70vh",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              ...commonStyles.glassmorphism,
              ...commonStyles.cardHover,
              p: 3,
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Fiona Verzivolli"
              sx={{
                width: { xs: 260, sm: 340, md: 380 },
                height: "auto",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.10)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 16px rgba(15, 23, 42, 0.18)",
                },
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
              opacity: 0.85,
            }}
          >
            Me and my orangutan friend at the Toronto Zoo.
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: { xs: "100%", lg: "50%" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              ...commonStyles.gradientText,
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
            }}
          >
            A very passionate Software Engineer!
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              opacity: 0.85,
              maxWidth: "600px",
              mx: { xs: "auto", lg: "0" },
            }}
          >
            This summer, I interned at Shopify, and I'm currently working on unique
            and innovative projects that make a real impact. I love creating
            solutions that push the boundaries of what's possible, and most
            importantly, help others!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;

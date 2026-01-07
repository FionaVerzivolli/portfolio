import React from "react";
import { Typography, Box, Container, Paper } from "@mui/material";
import { commonStyles } from "./theme";
import profileImage from "./images/friends.jpg";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography 
          variant="h2" 
          sx={{
            mb: 2,
            ...commonStyles.gradientText
          }}
        >
          Home
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;

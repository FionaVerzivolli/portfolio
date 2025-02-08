import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{
          p: 3,
          textAlign: "center",
          bgcolor: "#2A2A2A",
          borderRadius: "1rem",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          '&:hover': {
            transform: "translateY(-0.5vh)",
            boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.4)",
          },
        }}
        onClick={() => window.open(link)}
      >
        {/* Project Title */}
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>

        {/* Project Description */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>

        {/* Technologies Used */}
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic", fontSize: "0.9rem", opacity: 0.8 }}
          >
            {technologies.join(" • ")}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;

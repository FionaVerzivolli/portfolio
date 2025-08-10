import React from "react";
import { Grid, Paper, Typography, Box, Chip } from "@mui/material";
import { commonStyles } from "./theme";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: "left",
          ...commonStyles.glassmorphism,
          ...commonStyles.gradientBorder,
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          ...commonStyles.cardHover,
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 25px 50px rgba(99, 102, 241, 0.3)',
            border: '1px solid rgba(99, 102, 241, 0.5)',
            background: 'rgba(255, 255, 255, 0.08)',
          },
        }}
        onClick={() => window.open(link, '_blank')}
      >
        {/* Project Title */}
        <Typography 
          variant="h5" 
          sx={{
            mb: 2,
            fontSize: '1.4rem',
            lineHeight: 1.3,
            ...commonStyles.gradientText,
            transition: 'all 0.3s ease',
          }}
        >
          {title}
        </Typography>

        {/* Project Description */}
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            lineHeight: 1.6,
            flex: 1,
            fontSize: '0.95rem',
            opacity: 0.9,
            transition: 'all 0.3s ease',
          }}
        >
          {description}
        </Typography>

        {/* Technologies Used */}
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1 
          }}>
            {technologies.slice(0, 4).map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  color: '#6366f1',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.2)',
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  }
                }}
              />
            ))}
            {technologies.length > 4 && (
              <Chip
                label={`+${technologies.length - 4} more`}
                size="small"
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)',
                  }
                }}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;

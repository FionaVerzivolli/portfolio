import React from 'react';
import { Box } from '@mui/material';

const FloatingParticles = () => {
  return (
    <Box className="floating-particles">
      {[...Array(10)].map((_, index) => (
        <Box
          key={index}
          className="particle"
          sx={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </Box>
  );
};

export default FloatingParticles;

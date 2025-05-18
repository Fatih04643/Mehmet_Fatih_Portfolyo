import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(156, 39, 176, 0.1)',
      }}
    >
      <Container maxWidth="sm">
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'rgba(255,255,255,0.7)',
            textShadow: '0 0 5px rgba(33, 150, 243, 0.3)',
          }} 
          align="center"
        >
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 
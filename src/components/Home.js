import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        background: '#0a192f',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%237c3aed\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
          zIndex: 1,
        }
      }}
    >
      <Container 
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          padding: { xs: '2rem', md: '3rem' },
          background: 'rgba(17, 34, 64, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(100, 255, 218, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
          maxWidth: '900px !important',
          margin: '0 auto',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.3)',
          }
        }}
      >
        <Box
          sx={{
            width: { xs: 220, md: 280 },
            height: { xs: 220, md: 280 },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -4,
              left: -4,
              right: -4,
              bottom: -4,
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
              opacity: 0.5,
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -3,
              left: -3,
              right: -3,
              bottom: -3,
              borderRadius: '8px',
              background: 'linear-gradient(225deg, #7c3aed, #64ffda)',
              opacity: 0.3,
              filter: 'blur(12px)',
              zIndex: 0,
            },
          }}
        >
          <Avatar
            src="/images/fatih.jpg"
            alt="Profile Photo"
            sx={{
              width: '100%',
              height: '100%',
              border: '4px solid rgba(100, 255, 218, 0.2)',
              position: 'relative',
              zIndex: 1,
              borderRadius: '8px',
              boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                border: '4px solid rgba(100, 255, 218, 0.4)',
                boxShadow: '0 0 40px rgba(100, 255, 218, 0.3)',
              },
            }}
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '1px',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Mehmet Fatih Günül
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#ccd6f6',
              letterSpacing: '0.5px',
              fontWeight: 500,
              mb: 3,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              opacity: 0.9,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Bilgisayar Mühendisliği Öğrencisi
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
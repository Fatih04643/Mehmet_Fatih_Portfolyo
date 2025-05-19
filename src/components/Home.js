import React from 'react';
import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
            radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(100, 255, 218, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(100, 255, 218, 0.15) 0%, transparent 50%)
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
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 5,
          padding: { xs: '2rem', md: '3rem' },
          maxWidth: '1200px !important',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Mehmet Fatih Günül
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#8892b0',
                letterSpacing: '0.5px',
                fontWeight: 500,
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                maxWidth: '600px',
                textAlign: 'center'
              }}
            >
              Bilgisayar Mühendisliği Öğrencisi
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              justifyContent: 'center',
              width: '100%'
            }}>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                delay={100}
                isDynamic={true}
                spyThrottle={500}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #64ffda 30%, #7c3aed 90%)',
                    color: '#0a192f',
                    fontWeight: 600,
                    padding: '10px 25px',
                    borderRadius: '8px',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5ae8c5 30%, #6d32d1 90%)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Projelerimi Gör
                </Button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                delay={100}
                isDynamic={true}
                spyThrottle={500}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: '2px solid #64ffda',
                    color: '#64ffda',
                    fontWeight: 600,
                    padding: '10px 25px',
                    borderRadius: '8px',
                    '&:hover': {
                      border: '2px solid #64ffda',
                      background: 'rgba(100, 255, 218, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Mesaj Gönder
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box
            sx={{
              width: { xs: 280, md: 400 },
              height: { xs: 280, md: 400 },
              position: 'relative',
              perspective: '1000px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                borderRadius: '16px',
                background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
                opacity: 0.6,
                zIndex: 0,
                transform: 'rotateY(10deg) rotateX(10deg)',
                transition: 'all 0.3s ease',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -6,
                left: -6,
                right: -6,
                bottom: -6,
                borderRadius: '16px',
                background: 'linear-gradient(225deg, #7c3aed, #64ffda)',
                opacity: 0.4,
                filter: 'blur(20px)',
                zIndex: 0,
                transform: 'rotateY(10deg) rotateX(10deg)',
                transition: 'all 0.3s ease',
              },
              '&:hover::before, &:hover::after': {
                transform: 'rotateY(15deg) rotateX(15deg)',
              },
            }}
          >
            <Avatar
              src="/images/fatih.jpg"
              alt="Profile Photo"
              sx={{
                width: '100%',
                height: '100%',
                border: '4px solid rgba(100, 255, 218, 0.25)',
                position: 'relative',
                zIndex: 1,
                borderRadius: '16px',
                boxShadow: '0 0 35px rgba(100, 255, 218, 0.25)',
                transition: 'all 0.4s ease-in-out',
                transform: 'rotateY(10deg) rotateX(10deg)',
                '&:hover': {
                  transform: 'rotateY(15deg) rotateX(15deg) scale(1.05)',
                  border: '4px solid rgba(100, 255, 218, 0.5)',
                  boxShadow: '0 0 50px rgba(100, 255, 218, 0.4)',
                },
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;
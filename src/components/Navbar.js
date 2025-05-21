import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const pages = [
  { name: 'Ana Sayfa', id: 'home' },
  { name: 'Ben Kimim?', id: 'about' },
  { name: 'Neler Yapabilirim?', id: 'skills' },
  { name: 'Portfolyo', id: 'portfolio' },
  { name: 'İletişim', id: 'contact' }
];

const socialLinks = [
  { icon: <GitHub />, url: 'https://github.com/Fatih04643', label: 'GitHub' },
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/fatih-günül-242530295', label: 'LinkedIn' },
  { icon: <Instagram />, url: 'https://www.instagram.com/gnl__mehmet/?hl=tr', label: 'Instagram' },
  { icon: <Twitter />, url: 'https://x.com/FatihGunul', label: 'Twitter' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = pages.map(page => page.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navButtonStyle = (isActive) => ({
    my: 2,
    color: 'white',
    display: 'block',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
      width: '80%',
      height: '2px',
      background: 'linear-gradient(45deg, #64ffda 30%, #7c3aed 90%)',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'translateX(-50%) scaleX(1)',
    },
  });

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.id} 
                  onClick={handleCloseNavMenu}
                  sx={{
                    background: activeSection === page.id ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                  }}
                >
                  <Link
                    to={page.id}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 1, pt: 1 }}>
                <Stack 
                  direction="row" 
                  spacing={1}
                  justifyContent="center"
                  sx={{ p: 1 }}
                >
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      aria-label={social.label}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                          boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={navButtonStyle(activeSection === page.id)}
              >
                <Link
                  to={page.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Stack 
            direction="row" 
            spacing={1}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                aria-label={social.label}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                    boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 
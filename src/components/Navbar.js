import React, { useState } from 'react';
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

const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];

const socialLinks = [
  { icon: <GitHub />, url: 'https://github.com/Fatih04643', label: 'GitHub' },
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/fatih-günül-242530295', label: 'LinkedIn' },
  { icon: <Instagram />, url: 'https://www.instagram.com/gnl__mehmet/?hl=tr', label: 'Instagram' },
  { icon: <Twitter />, url: 'https://x.com/FatihGunul', label: 'Twitter' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign="center">{page}</Typography>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  to={page.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
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
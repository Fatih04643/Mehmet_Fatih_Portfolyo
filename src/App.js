import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda', // Mint yeşili
    },
    secondary: {
      main: '#7c3aed', // Mor
    },
    background: {
      default: '#0a192f', // Koyu lacivert
      paper: '#112240', // Biraz daha açık lacivert
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 34, 64, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(17, 34, 64, 0.95)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        contained: {
          background: 'linear-gradient(45deg, #64ffda 30%, #7c3aed 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #5ae8c5 30%, #6d32d1 90%)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 
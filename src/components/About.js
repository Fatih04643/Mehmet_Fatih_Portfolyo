import React from 'react';
import { Box, Typography, Container, Paper, Grid, Fade } from '@mui/material';
import { Person, School, Code } from '@mui/icons-material';

const aboutSections = [
    {
        title: 'Kişisel Bilgiler',
        icon: Person,
        color: '#64ffda',
        content: 'Merhaba ben Fatih, Bilgisayar Mühendisi öğrencisiyim.'
    },
    {
        title: 'Eğitim',
        icon: School,
        color: '#7c3aed',
        content: 'Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.'
    },
    {
        title: 'İlgi Alanları',
        icon: Code,
        color: '#06b6d4',
        content: 'Mobil uygulama geliştirme ve oyun programlama üzerine ilgim var'
    }
];

function About() {
    return (
        <Container maxWidth="lg" sx={{ py: 12 }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3,
                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                >
                    Hakkımda
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: '600px', mx: 'auto' }}
                >
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {aboutSections.map((section, index) => (
                    <Grid item xs={12} md={4} key={section.title}>
                        <Fade in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    background: `linear-gradient(135deg, rgba(17, 34, 64, 0.95), rgba(17, 34, 64, 0.85))`,
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(100, 255, 218, 0.1)',
                                    borderRadius: 4,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    '&:before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: `linear-gradient(90deg, ${section.color}, transparent)`,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        border: `1px solid ${section.color}40`,
                                        boxShadow: `0 8px 30px ${section.color}15`,
                                        '& .section-icon': {
                                            transform: 'scale(1.1) rotate(10deg)',
                                            boxShadow: `0 0 20px ${section.color}30`
                                        },
                                        '&:before': {
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="section-icon"
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                                        border: `1px solid ${section.color}30`,
                                        transition: 'all 0.4s ease',
                                        boxShadow: `0 4px 15px ${section.color}15`
                                    }}
                                >
                                    {React.createElement(section.icon, {
                                        sx: { fontSize: 35, color: section.color }
                                    })}
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: section.color,
                                        mb: 2.5,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    {section.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#ccd6f6',
                                        lineHeight: 1.8,
                                        fontSize: '1.05rem',
                                        opacity: 0.9
                                    }}
                                >
                                    {section.content}
                                </Typography>
                            </Paper>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default About;
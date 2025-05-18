import React from 'react';
import { Container, Typography, Grid, Paper, Box, Tooltip } from '@mui/material';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiDotnet } from 'react-icons/si';

const skills = [
    { 
        name: 'React', 
        url: 'https://reactjs.org', 
        icon: FaReact,
        color: '#61DAFB',
        category: 'Frontend'
    },
    { 
        name: 'JavaScript', 
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 
        icon: FaJs,
        color: '#F7DF1E',
        category: 'Frontend'
    },
    { 
        name: 'HTML/CSS', 
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', 
        icon: FaHtml5,
        color: '#E34F26',
        category: 'Frontend'
    },
    { 
        name: 'Node.js', 
        url: 'https://nodejs.org', 
        icon: FaNodeJs,
        color: '#339933',
        category: 'Backend'
    },
    { 
        name: 'Python', 
        url: 'https://www.python.org', 
        icon: FaPython,
        color: '#3776AB',
        category: 'Backend'
    },
    { 
        name: 'SQL', 
        url: 'https://www.w3schools.com/sql', 
        icon: FaDatabase,
        color: '#00758F',
        category: 'Database'
    },
    { 
        name: 'C#', 
        url: 'https://learn.microsoft.com/en-us/dotnet/csharp', 
        icon: SiDotnet,
        color: '#512BD4',
        category: 'Backend'
    }
];

function Skills() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    Yeteneklerim
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: '600px', mx: 'auto' }}
                >
                    Kullandığım teknolojiler
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {skills.map((skill) => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                        <Tooltip title={skill.category} placement="top" arrow>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    background: 'rgba(17, 34, 64, 0.6)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(100, 255, 218, 0.1)',
                                    borderRadius: 4,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        border: '1px solid rgba(100, 255, 218, 0.3)',
                                        '& .skill-icon': {
                                            transform: 'scale(1.1) rotate(10deg)',
                                        },
                                        '&::before': {
                                            transform: 'scale(1.2)',
                                        },
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                                        transition: 'transform 0.3s ease',
                                        zIndex: 0,
                                    },
                                }}
                            >
                                <Box
                                    className="skill-icon"
                                    sx={{
                                        mb: 2,
                                        transition: 'transform 0.3s ease',
                                        transform: 'scale(1)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    {React.createElement(skill.icon, {
                                        size: 48,
                                        style: { color: skill.color }
                                    })}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#64ffda',
                                        textAlign: 'center',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                            </Paper>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Skills;

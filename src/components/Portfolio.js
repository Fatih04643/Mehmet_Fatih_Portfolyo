import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'Basit 2D Oyun',
    description: 'Basit engelden kaçma oyunu  ',
    github: 'https://github.com/Fatih04643/basit2D_oyun',
    image: '/images/oyunn.png',
    technologies: [  'Python'],
  },
  {
    title: 'Notebook',
    description: 'Basit not defteri uygulaması  ',
    github: 'https://github.com/Fatih04643/notepadd',
    image: '/images/not_fefteri.png',
    technologies: ['PyQt5', 'Python','QTDesigner'],
  },
  {
    title: 'Soru Bankası',
    description: 'Soru bankası hazırlamak için basit bir proje',
    github: 'https://github.com/Fatih04643/sorubankasi__uygulamasi',
    image: '/images/soru_bankası.png',
    technologies: ['PyQt5', 'Python', 'QTDesigner'],
  },
  {
    title: 'Ürün Yönetim Sistemi',
    description: 'Ürün yönetme',
    github: 'https://github.com/Fatih04643/Urun_Yonetim_Sistemi',
    image: '/images/ürün_yönetim.png',
    technologies: ['PyQt5', 'Python'],
  },
];

function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
            mb: 2
          }}
        >
          Portfolio
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}
        >
          Projelerimi keşfedin
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(17, 34, 64, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  border: '1px solid rgba(100, 255, 218, 0.3)',
                  '& .project-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(17, 34, 64, 0) 0%, rgba(17, 34, 64, 0.8) 100%)',
                  }}
                />
              </Box>
              
              <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="h5" 
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: '#64ffda',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#ccd6f6',
                    mb: 2 
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        color: '#64ffda',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        '&:hover': {
                          background: 'rgba(124, 58, 237, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 2, pt: 0, gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  href={project.github}
                  target="_blank"
                  fullWidth
                  sx={{
                    borderColor: '#64ffda',
                    color: '#64ffda',
                    '&:hover': {
                      borderColor: '#64ffda',
                      background: 'rgba(100, 255, 218, 0.1)',
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Launch />}
                  href={project.github}
                  target="_blank"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(45deg, #64ffda 30%, #7c3aed 90%)',
                    color: '#0a192f',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5ae8c5 30%, #6d32d1 90%)',
                    },
                  }}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio; 
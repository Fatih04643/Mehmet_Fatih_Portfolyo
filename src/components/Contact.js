import React from 'react';
import {
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Box,
    Alert,
    Zoom,
    Grid,
    IconButton,
} from '@mui/material';
import { Send, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('İsim gerekli')
        .min(2, 'İsim en az 2 karakter olmalıdır'),
    email: yup
        .string()
        .email('Geçerli bir email adresi girin')
        .required('Email gerekli'),
    message: yup
        .string()
        .required('Mesaj gerekli')
        .min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

const socialLinks = [
    {
        name: 'GitHub',
        icon: GitHub,
        url: 'https://github.com/yourusername',
        color: '#64ffda'
    },
    {
        name: 'LinkedIn',
        icon: LinkedIn,
        url: 'https://linkedin.com/in/yourusername',
        color: '#64ffda'
    },
    {
        name: 'Email',
        icon: Email,
        url: 'mailto:your.email@example.com',
        color: '#64ffda'
    }
];

function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            console.log(values);
            setTimeout(() => {
                setStatus({ success: true });
                setSubmitting(false);
                resetForm();
            }, 1000);
        },
    });

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            background: 'rgba(17, 34, 64, 0.05)',
            backdropFilter: 'blur(10px)',
            '& fieldset': {
                borderColor: 'rgba(100, 255, 218, 0.2)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(100, 255, 218, 0.4)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#64ffda',
            },
        },
        '& .MuiInputLabel-root': {
            color: '#ccd6f6',
            '&.Mui-focused': {
                color: '#64ffda',
            },
        },
        '& .MuiOutlinedInput-input': {
            color: '#ccd6f6',
        },
        '& .MuiFormHelperText-root': {
            color: '#ff6b6b',
        },
    };

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(45deg, #64ffda, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    İletişim
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}
                >
                    Benimle iletişime geçin
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Zoom in timeout={800}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, sm: 5 },
                                background: 'rgba(17, 34, 64, 0.6)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: 4,
                            }}
                        >
                            {formik.status?.success && (
                                <Alert
                                    severity="success"
                                    sx={{
                                        mb: 4,
                                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                        color: '#64ffda',
                                        border: '1px solid rgba(100, 255, 218, 0.2)',
                                        '& .MuiAlert-icon': {
                                            color: '#64ffda'
                                        }
                                    }}
                                >
                                    Mesajınız gönderildi! En kısa sürede dönüş yapılacaktır.
                                </Alert>
                            )}

                            <form onSubmit={formik.handleSubmit}>
                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="İsim"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        sx={inputStyles}
                                    />
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={inputStyles}
                                    />
                                </Box>

                                <Box sx={{ mb: 4 }}>
                                    <TextField
                                        fullWidth
                                        id="message"
                                        name="message"
                                        label="Mesajınız"
                                        multiline
                                        rows={6}
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                        helperText={formik.touched.message && formik.errors.message}
                                        sx={inputStyles}
                                    />
                                </Box>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={formik.isSubmitting}
                                    sx={{
                                        py: 2,
                                        background: 'linear-gradient(45deg, #64ffda 30%, #7c3aed 90%)',
                                        color: '#0a192f',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        border: 'none',
                                        boxShadow: '0 3px 5px 2px rgba(100, 255, 218, .3)',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #7c3aed 30%, #64ffda 90%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 10px 4px rgba(100, 255, 218, .2)',
                                        },
                                        '&:disabled': {
                                            background: 'rgba(100, 255, 218, 0.1)',
                                            color: 'rgba(100, 255, 218, 0.4)',
                                        }
                                    }}
                                    endIcon={<Send />}
                                >
                                    {formik.isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                                </Button>
                            </form>
                        </Paper>
                    </Zoom>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;
import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactUsComponent = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                color: '#fff',
                py: 4,
                px: { xs: '20px', md: '120px' }
            }}
        >
            <Container >
                {/* Title and Subtitle */}
                <Typography variant="h3" align='center' color="#fff" fontWeight={700} sx={{
                    mb: { xs: 2, md: 4 },
                    lineHeight: 1.2,
                    fontSize: { xs: '24px', md: '53px' },
                    fontFamily: '"Wix Madefor Display", sans-serif'
                }}>
                    Contact Us
                </Typography>
                <Typography align="center" sx={{ mb: 6, fontFamily: '"Inter", sans-serif', color: 'rgba(255, 255, 255, 1)', fontSize: { xs: '14px', md: '23px' }, fontWeight: 400 }}>
                    Interested in working with us? Let us know your expectations and specific needs. Reach out today, and let's explore how we can collaborate effectively!
                </Typography>

                {/* Contact Form */}
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                    <Grid container spacing={4} maxWidth="100%">
                        {/* First name and Last name in single row */}
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, mb: 1 }}>
                                First name*
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder=""
                                InputProps={{
                                    sx: {
                                        background: 'rgba(24,23,26,1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'Inter, sans-serif',
                                        height: { xs: '50px', md: '86px' },
                                        width: { xs: '350px', md: '500px' },
                                        '& input': {
                                            height: '86px',
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        },
                                    },
                                }}
                                InputLabelProps={{ shrink: false }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(24,23,26,1)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, mb: 1 }}>
                                Last name*
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder=""
                                InputProps={{
                                    sx: {
                                        background: 'rgba(24,23,26,1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'Inter, sans-serif',
                                        height: { xs: '50px', md: '86px' },
                                        width: { xs: '350px', md: '500px' },
                                        '& input': {
                                            height: '86px',
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        },
                                    },
                                }}
                                InputLabelProps={{ shrink: false }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(24,23,26,1)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                                required
                            />
                        </Grid>
                        {/* Email and Contact number in single row */}
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, mb: 1 }}>
                                E-mail*
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="email"    
                                placeholder=""
                                InputProps={{
                                    sx: {
                                        background: 'rgba(24,23,26,1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'Inter, sans-serif',
                                        height: { xs: '50px', md: '86px' },
                                        width: { xs: '350px', md: '500px' },
                                        '& input': {
                                            height: '86px',
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        },
                                    },
                                }}
                                InputLabelProps={{ shrink: false }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(24,23,26,1)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, mb: 1 }}>
                                Contact number*
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="tel"
                                placeholder=""
                                InputProps={{
                                    sx: {
                                        background: 'rgba(24,23,26,1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'Inter, sans-serif',
                                        height: { xs: '50px', md: '86px' },
                                        width: { xs: '350px', md: '500px' },
                                        '& input': {
                                            height: '86px',
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        },
                                    },
                                }}
                                InputLabelProps={{ shrink: false }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(24,23,26,1)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                                required
                            />
                        </Grid>
                        {/* Message in single row */}
                        <Grid item xs={12}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, mb: 1 }}>
                                Message*
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={5}
                                placeholder=""
                                InputProps={{
                                    sx: {
                                        height: { xs: '150px', md: '238px' },
                                        width: { xs: '350px', md: '1030px' },
                                        maxWidth: '100%',
                                        background: 'rgba(24,23,26,1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'Inter, sans-serif',
                                    },
                                }}
                                InputLabelProps={{ shrink: false }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(24,23,26,1)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                                required
                            />
                        </Grid>
                        {/* Submit button at bottom left */}
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        width: { xs: '111px', md: '204px' },
                                        height: { xs: '32px', md: '59px' },
                                        mt: { xs: 0, md: 2 },
                                        background: '#fff',
                                        color: '#18171A',
                                        borderRadius: '8px',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        fontSize: { xs: '14px', md: '24px' },
                                        textTransform: 'none',
                                        px: 4,
                                        boxShadow: 'none',
                                        '&:hover': {
                                            background: '#e0e0e0',
                                        },
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default ContactUsComponent;

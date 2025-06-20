import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Ganeshwaran from '../../assets/home/ganeswaran.jpg';
import Croos from '../../assets/home/croos.jpg';
import Joice from '../../assets/home/joice.jpg';
import randomImg04 from '../../assets/home/randomImg04.png';
import Roman from '../../assets/home/roman.png';



const OurTeamComponent = () => {
    return (
        <Box sx={{ bgcolor: 'linear-gradient(90deg, #181C1F 0%, #23272A 100%)', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="xl" sx={{ mb: 4, px: { xs: '30px', md: '100px' } }}>
                <Grid flexDirection={{ xs: 'column', md: 'row' }} container spacing={6} alignItems="center">
                    <Grid item maxWidth={{ xs: '100%', md: '50%' }} xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Typography variant="subtitle1" color="#fff" sx={{ mb: 1, fontFamily: '"Inter", sans-serif', fontSize: { xs: '14px', md: '24px' } }}>
                            Our Team
                        </Typography>
                        <Typography variant="h3" color="#fff" fontWeight={700} sx={{
                            mb: { xs: 1, md: 3 },
                            lineHeight: 1.2,
                            fontSize: { xs: '24px', md: '53px' },
                            fontFamily: '"Wix Madefor Display", sans-serif'
                        }}>
                            Meet the Team Behind <br /> Moi Pay
                        </Typography>
                        <Typography sx={{
                            color: 'var(--color-grey-64, #A1A1A6)',
                            fontSize: { xs: '14px', md: '32px' },
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: '400',
                            wordWrap: 'break-word',
                            mb: { xs: 1, md: 3 },
                            lineHeight: { xs: '22px', md: '38px' }
                        }}>
                            At Moi Pay, we're building the future of personal finance one seamless payment at a time. We're a creative, remote-first fintech team committed to simplifying digital transactions for everyone.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3, maxWidth: '500px' }}>
                            <img src={randomImg04} alt="Business meeting" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xl" sx={{ mt: 4, py: 5 }}>
                <Typography variant="h3" align='center' color="#fff" fontWeight={600} sx={{
                    mb: 8,
                    lineHeight: 1.2,
                    fontSize: { xs: '24px', md: '53px' },
                    fontFamily: '"Wix Madefor Display", sans-serif',
                    maxWidth: { xs: '70%', md: '100%' },
                    textAlign: { xs: 'center', md: 'center' },
                    mx: 'auto'
                }}>
                    Driving Innovation at Moi Pay
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    overflowX: 'auto',
                    gap: 5,
                    pb: 2,
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            position: 'relative',
                            width: '363px',
                            height: '474px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: 2,
                            mx: 'auto',
                        }}>
                            <img
                                src={Ganeshwaran}
                                alt="E Ganeshwaran"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    filter: 'brightness(0.6)',
                                    display: 'block',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    color: '#fff',
                                    px: 2,
                                    py: 2,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: 32, fontFamily: '"Inter", sans-serif' }}>
                                    E Ganeshwaran
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: 24, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                    CEO and Founder
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            position: 'relative',
                            width: '363px',
                            height: '474px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: 2,
                            mx: 'auto',
                        }}>
                            <img
                                src={Croos}
                                alt="I Andrewson Croos"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    filter: 'brightness(0.6)',
                                    display: 'block',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    color: '#fff',
                                    px: 2,
                                    py: 2,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: 32, fontFamily: '"Inter", sans-serif' }}>
                                    I Andrewson Croos
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: 24, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                    CTO
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            position: 'relative',
                            width: '363px',
                            height: '474px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: 2,
                            mx: 'auto',
                        }}>
                            <img
                                src={Joice}
                                alt="J Joice Peries"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    filter: 'brightness(0.6)',
                                    display: 'block',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    color: '#fff',
                                    px: 2,
                                    py: 2,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: 32, fontFamily: '"Inter", sans-serif' }}>
                                    J Joice Peries
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: 24, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                    GM
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            position: 'relative',
                            width: '363px',
                            height: '474px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: 2,
                            mx: 'auto',
                        }}>
                            <img
                                src={Roman}
                                alt="Roman"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    filter: 'brightness(0.7)',
                                    display: 'block',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    color: '#fff',
                                    px: 2,
                                    py: 2,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: 32, fontFamily: '"Inter", sans-serif' }}>
                                    Roman
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: 24, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                    Operations Manager
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default OurTeamComponent;

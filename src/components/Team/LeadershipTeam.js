import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Ganeshwaran from '../../assets/home/ganeswaran.jpg';
import Croos from '../../assets/home/croos.jpg';
import Joice from '../../assets/home/joice.jpg';
import Roman from '../../assets/home/roman.png';

const LeadershipTeam = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 1, py: 1 }}>
            <Typography variant="h3" align='center' color="#fff" fontWeight={600} sx={{
                mb: 2,
                lineHeight: 1.2,
                fontSize: { xs: '24px', md: '64px' },
                fontFamily: '"Wix Madefor Display", sans-serif',
                maxWidth: { xs: '70%', md: '100%' },
                textAlign: { xs: 'center', md: 'center' },
                mx: 'auto'
            }}>
                Driving Innovation at Moi Pay
            </Typography>
            
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#A1A1A6',
                fontSize: { xs: '14px', md: '32px' },
                fontFamily: '"Inter" , sans-serif',
                fontWeight: { xs: '400', md: '600' },
                lineHeight: { xs: '22px', md: '160%' },
                wordWrap: 'break-word',
                mb: 8,
                maxWidth: '1200px',
                mx: 'auto',
                px: 2
            }}>
                Our global mission is for every person and business to do all things money spending, saving, investing, borrowing, managing, and more in just a few taps.
            </Box>
            
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
    );
}

export default LeadershipTeam; 
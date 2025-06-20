import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import govpaylogo from '../../assets/logo/govpaylogo.png';
import lankapaylogo from '../../assets/logo/lankapaylogo.png';

const PartnerComponent = () => (
    <Box
        sx={{
            width: '100%',
            maxWidth: { xs: 1200, md: 1400 },
            padding: { xs: '1rem 1rem', md: '1rem 1rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
        }}
    >
        <Typography
            sx={{
                fontFamily: '"Wix Madefor Display", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '24px', md: '63.4px' },
                lineHeight: { xs: '40px', md: '72.96px' },
                textAlign: 'center',
                color: '#fff',
                marginBottom: '2rem',
                width: '100%',
            }}
        >
            Trusted partnerships and successful collaborations
        </Typography>
        
        <Typography
            sx={{
                color: 'rgba(147, 147, 152, 1)',
                fontSize: { xs: '14px', md: '19.6px' },
                textAlign: 'justify',
                marginTop: '0.2rem',
                lineHeight: { xs: '20px', md: '20.4px' },
                marginBottom: '1rem',
                textAlign: 'center',
            }}
        >
            We're true partners – not vendors. Our relationships with our clients are long term and rewarding – don't take our word for it.
        </Typography>

        <Grid
            container
            spacing={2}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: { xs: '2rem', md: '3rem' },
                margin: '2.5rem 0 0 0',
                width: '100%',
            }}
        >
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        background: '#262626',
                        borderRadius: '16px',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
                        padding: '28px 32px 100px 32px',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '600px' },
                        color: '#bdbdbd',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: { xs: 'auto', md: '320px' },
                        position: 'relative',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            Your bridge to government services
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            MoiPay is integrated with LankaPay, Sri Lanka's National Payment Network, to offer real-time, secure transactions between banks. This ensures users can send and receive money across any bank with confidence and ease.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            Powered by LankaClear, LankaPay enables interoperable digital payments, enhancing national financial inclusion.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '32px',
                            bottom: '20px',
                        }}
                    >
                        <img 
                            src={lankapaylogo} 
                            alt="Lankapay Logo" 
                            style={{ height: '60px', width: 'auto' }} 
                        />
                    </Box>
                </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        background: '#262626',
                        borderRadius: '16px',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
                        padding: '28px 32px 100px 32px',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '600px' },
                        color: '#bdbdbd',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: { xs: 'auto', md: '320px' },
                        position: 'relative',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            Your bridge to government services
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            Through GovPay integration, MoiPay users can conveniently settle government-related payments — from taxes and fines to exam fees and utility bills — all in one place.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '19px',
                                color: 'rgba(147, 147, 152, 1)',
                                marginBottom: '18px',
                                lineHeight: '20.4px',
                                textAlign: 'justify',
                            }}
                        >
                            GovPay is a government-backed digital platform that simplifies public payments, ensuring transparency and convenience.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '32px',
                            bottom: '20px',
                        }}
                    >
                        <img 
                            src={govpaylogo} 
                            alt="GovPay Logo" 
                            style={{ height: '80px', width: 'auto' }} 
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
);

export default PartnerComponent;

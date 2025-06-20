import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import aboutUsImage from '../../assets/about_us/random_img_01.png';

const AboutUsComponent = () => {
    const features = [
        'Get your own digital wallet the moment you sign up',
        'Send and receive money instantly, no extra fees.',
        'Link your bank account or card to easily top up your wallet',
        'Pay your bills directly from the app',
        'Stay on top of your finances with scheduled payments.',
        'Split group expenses and settle up in seconds'
    ];

    const merchantFeatures = [
        'Manage your business accounts and bills securely',
        'Easily transfer business funds to any bank',
        'Save time by scheduling recurring business payments',
        'Interactive graphs show your financial performance.'
    ];

    const getBoxStyle = (index) => {
        // Pattern: -15deg, 6deg, -15deg, 6deg, -15deg, 6deg
        const rotation = index % 2 === 1 ? 6 : -15;

        return {
            width: '20px',
            height: '20px',
            bgcolor: '#91CEDC',
            borderRadius: '2px',
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center',
            flexShrink: 0,
            mt: 0.5
        };
    };

    // Feature component for personal features
    const FeatureComponent = () => (
        <Box
            sx={{
                position: 'relative',
                bgcolor: 'rgba(62, 62, 62, 1)',
                borderRadius: '36px',
                p: { xs: 3, md: 5 },
                maxWidth: '700px',
                width: '100%'
            }}
        >
            <Button
                sx={{
                    position: 'absolute',
                    right: '24px',
                    top: '24px',
                    bgcolor: '#87DFCA',
                    color: '#000',
                    px: 3,
                    py: 1,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '16px',
                    '&:hover': {
                        bgcolor: '#75ceb8'
                    }
                }}
            >
                General App
            </Button>

            <Stack spacing={3} sx={{ mt: 6 }}>
                {features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={getBoxStyle(index)} />
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: { xs: 16, md: 20 },
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}
                        >
                            {feature}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );

    // Business Feature component
    const BusinessFeatureComponent = () => (
        <Box
            sx={{
                position: 'relative',
                bgcolor: 'rgba(25, 25, 26, 1)',
                borderRadius: '36px',
                p: { xs: 3, md: 5 },
                maxWidth: '600px',
                width: '100%'
            }}
        >
            <Button
                sx={{
                    position: 'absolute',
                    right: '24px',
                    top: '24px',
                    bgcolor: 'rgba(191, 158, 254, 1)',
                    color: '#000',
                    px: 3,
                    py: 1,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '16px',
                    '&:hover': {
                        bgcolor: '#75ceb8'
                    }
                }}
            >
                Merchant
            </Button>

            <Stack spacing={3} sx={{ mt: 6 }}>
                {merchantFeatures.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={getBoxStyle(index)} />
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: { xs: 16, md: 20 },
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}
                        >
                            {feature}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );

    const CircleArrow = () => (
        <Box
            component="span"
            sx={{
                color: 'rgba(191, 158, 254, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
                <path d="M8 16L16 8M16 8H10M16 8V14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Box>
    );

    return (
        <Box sx={{ width: '100%', py: { xs: 4, md: 8 } }}>
            <Box sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 2, md: 6 } }}>
                {/* Top Heading Section */}
                <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: '1000px', textAlign: 'left' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#F4F4F4',
                            fontSize: { xs: 28, md: 55 },
                            fontFamily: '"Wix Madefor Display", sans-serif',
                            fontWeight: 700,
                            lineHeight: 1.2,
                            mb: 2,
                            textAlign: 'left'
                        }}
                    >
                        Choose Your Moi Pay Experience
                    </Typography>

                    <Typography
                        sx={{
                            color: 'rgba(185, 185, 186, 1)',
                            fontSize: { xs: 14, md: 16 },
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: 1.6,
                            mb: 4,
                            maxWidth: '800px',
                            textAlign: 'left'
                        }}
                    >
                        Whether you're managing personal finances or business transactions,<br />
                        we've got you covered with our features:
                    </Typography>
                </Box>

                {/* First Row - Features and Image */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 4, md: 3 },
                    alignItems: { xs: 'center', md: 'stretch' },
                    mb: { xs: 6, md: 0 }
                }}>
                    <FeatureComponent />

                    {/* Image Container */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '45%' },
                            height: { xs: '400px', md: '250px' },
                            minHeight: { md: '350px' },
                            maxHeight: { md: '600px' },
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src={aboutUsImage}
                            alt="Moi Pay Features"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </Box>
                </Box>

                {/* Second Row - Business Section and Features */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 4, md: 16 },
                    alignItems: { xs: 'center', md: 'stretch' },
                    mt: { xs: 4, md: -5 }
                }}>
                    {/* Business Section */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 3,
                            mt: { xs: 4, md: 8 },
                            ml: { xs: 0, md: 10 }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#F4F4F4',
                                fontSize: { xs: 28, md: "32px" },
                                fontFamily: '"Inter", sans-serif',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                textAlign: 'center'
                            }}
                        >
                            Streamline Your Business Finances
                        </Typography>

                        <Typography
                            sx={{
                                color: 'rgba(185, 185, 186, 1)',
                                fontSize: { xs: 14, md: 16 },
                                fontFamily: 'Inter, sans-serif',
                                lineHeight: 1.6,
                                mb: 2,
                                fontWeight: 400,
                                textAlign: 'center'
                            }}
                        >
                            Whether you're managing personal finances or business transactions, Rubaai gives you tools to do it smarter.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                alignSelf: 'center',
                                color: '#fff',
                                borderColor: 'rgba(191, 158, 254, 1)',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.5,
                                textTransform: 'none',
                                fontSize: { xs: 14, md: 16 },
                                fontFamily: '"Wix Madefor Display", sans-serif',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    borderColor: '#87DFCA',
                                    bgcolor: 'rgba(135, 223, 202, 0.1)'
                                }
                            }}
                        >
                            Contact Us Join with Merchnat
                            <CircleArrow />
                        </Button>
                    </Box>

                    {/* Business Feature Component */}
                    <BusinessFeatureComponent />
                </Box>
            </Box>
        </Box>
    );
};

export default AboutUsComponent;
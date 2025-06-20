import React from 'react';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import { FaArrowRight, FaLock, FaUsers, FaGlobe, FaBtc } from 'react-icons/fa';
import aboutUsImage from '../../assets/about_us/random_img_01.png';
import randomImg02 from '../../assets/about_us/random_img_02.png';
import payWithEaseImage from '../../assets/about_us/random_img_03.png';
import AllInOneFinancialSolution from '../home/AllInOneFinancialSolution';

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

    const statsData = [
        {
            icon: <FaUsers />,
            statistic: '55 + Million',
            description: 'Personal customers globally'
        },
        {
            icon: <FaLock />,
            statistic: '500 k+',
            description: 'Business customers globally'
        },
        {
            icon: <FaGlobe />,
            statistic: '2',
            description: 'countries and regions supported'
        },
        {
            icon: <FaBtc />,
            statistic: '36',
            description: 'in-app currencies supported'
        }
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

    const StatsSection = () => (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
            <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 4, md: 3 }}>
                {statsData.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Stack
                            spacing={2}
                            sx={{
                                bgcolor: 'rgba(25, 25, 26, 1)',
                                width: { xs: '100%', md: '280px' },
                                minWidth: { xs: '280px' },
                                borderRadius: '16px',
                                p: { xs: 3, md: 4 },
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                maxHeight: { xs: '100%', md: '200px' }
                            }}
                        >
                            <Box sx={{ fontSize: '40px', color: '#fff', mb: 1 }}>
                                {stat.icon}
                            </Box>
                            <Typography variant="h3" sx={{ color: '#fff', fontFamily: '"Wix Madefor Display", sans-serif', fontWeight: 600, fontSize: { xs: '2rem', md: '32px' } }}>
                                {stat.statistic}
                            </Typography>
                            <Typography sx={{ color: 'rgba(185, 185, 186, 1)', fontSize: '16px', lineHeight: 1.4 }}>
                                {stat.description}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
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

                {/* Stats Section */}
                <StatsSection />
                <PartnerwithusComponent />
                <PayWithEaseComponent />
                <AllInOneFinancialSolution />
            </Box>
        </Box>
    );


};

const PartnerwithusComponent = () => (
    <Box sx={{ maxWidth: '100%', mx: 'auto', mb: 8 }}>
        <Grid flexDirection={{ xs: 'column', md: 'row' }} container spacing={6} justifyContent="center">
            <Grid item maxWidth={{ xs: '100%', md: '50%' }} flexDirection={{ xs: 'column', md: 'row' }} xs={12} md={6} >
                <Typography variant="subtitle1" color="rgba(161, 161, 166, 1)" sx={{ mb: 1, fontFamily: '"Inter", sans-serif', fontSize: { xs: '14px', md: '24px' } }}>
                    Why Partner with Rubaai?
                </Typography>
                <Typography variant="h3" color="#fff" fontWeight={700} sx={{
                    mb: 3,
                    lineHeight: 1.2,
                    fontSize: { xs: '24px', md: '64px' },
                    fontFamily: '"Wix Madefor Display", sans-serif'
                }}>
                    Partner With Us.
                </Typography>
                <Typography maxWidth={{ xs: '100%', md: '50%' }} variant="body1" color="#d1d5db" sx={{
                    mb: 1, fontSize: { xs: '14px', md: '16px' }, fontFamily: '"Wix Madefor Display", sans-serif', textAlign: 'left'
                }}>
                    At Rubaai, we are committed to fostering partnerships that create shared success and
                    drive innovation. Whether you're a merchant, financial institution, technology provider, or
                    community organization, partnering with us means becoming part of a collaborative
                    network dedicated to delivering impactful and future-ready financial solutions.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                        color: '#fff',
                        borderColor: 'rgba(191, 158, 254, 1)',
                        borderRadius: '50px',
                        px: 3,
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: { xs: 14, md: 16 },
                        fontFamily: '"Inter", sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                            borderColor: '#87DFCA',
                            bgcolor: 'rgba(135, 223, 202, 0.1)'
                        },
                        mt: 4
                    }}
                >
                    Join with us
                    <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </Button>
            </Grid>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3, height: '100%' }}>
                    <img src={randomImg02} alt="Business meeting" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </Box>
            </Grid>
        </Grid>
    </Box>
);

const PayWithEaseComponent = () => {
    const features = [
        {
            title: 'Expense & Revenue Tracking',
            description: 'Track daily, weekly, and monthly expenses and income with interactive graphs and visual summaries to understand cash flow and business performance.'
        },
        {
            title: 'Scheduled Transactions',
            description: 'Schedule recurring payments and transfers to save time and avoid missed deadlines'
        },
        {
            title: 'Send Money to Bank Accounts',
            description: 'Easily transfer business funds to any bank account.'
        }
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: '100%', mx: 'auto' }}>
            <Box sx={{ maxWidth: '1000px', mx: 'auto', textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h2"
                    sx={{
                        color: '#F4F4F4',
                        fontSize: { xs: '24px', md: '54px' },
                        fontFamily: '"Wix Madefor Display", sans-serif',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        mb: 2,
                    }}
                >
                    Split bills, schedule transfers, pay with ease all in one app
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(161, 161, 166, 1)',
                        fontSize: { xs: 14, md: '32px' },
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.6,
                        mb: 4
                    }}
                >
                    Our global mission is for every person and business to do all things money spending, saving, investing, borrowing, managing, and more in just a few taps.
                </Typography>
            </Box>

            <Box
                sx={{
                    my: { xs: 4, md: 6 },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    mx: 'auto',
                    maxWidth: '900px'
                }}
            >
                <img
                    src={payWithEaseImage}
                    alt="Pay with ease"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </Box>

            <Box sx={{ maxWidth: '3000px', mx: 'auto', mt: 6 }}>
                <Stack spacing={4}>
                    {features.map((feature, index) => (
                        <Box key={index} sx={{ textAlign: { xs: 'left', md: index === 1 ? 'right' : 'left' } }}>
                            <Typography variant="h5" sx={{
                                color: '#FFFFFF',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: { xs: '24px', md: '48px' },
                                mb: 1,
                            }}>
                                {feature.title}
                            </Typography>
                            <Typography sx={{
                                color: 'rgba(161, 161, 166, 1)',
                                fontSize: { xs: 14, md: '32px' },
                                fontFamily: 'Inter, sans-serif',
                                lineHeight: 1.6,
                            }}>
                                {feature.description}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default AboutUsComponent;
import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import moipayPhone from "../../assets/home/home_screen.png";

const AllInOneFinancialSolution = () => {
    return (
        <Box
            sx={{
                width: '90%',
                maxHeight: { xs: 600, md: 600 },
                background: '#181A20',
                borderRadius: { xs: 4, md: "8px" },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, md: 8 },
                py: { xs: 4, md: 2 },
                mt: { xs: 4, md: 8 },
                mx: { xs: 1, md: 10 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Left Side: Text and Buttons */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: 'center',
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: { xs: 28, sm: 36, md: "63px" },
                        lineHeight: { xs: '38px', sm: '48px', md: '60px' },
                        textAlign: { xs: 'center', md: 'left' },
                        mb: { xs: 0, md: 3 },
                        mt: { xs: 20, md: 10 },
                        fontFamily: 'Wix Madefor Display, sans-serif',
                    }}
                >
                    Your All-in-One Financial Solution
                </Typography>
                <Typography
                    sx={{
                        color: '#B9B9BA',
                        fontSize: { xs: 15, md: "20px" },
                        fontWeight: 400,
                        lineHeight: { xs: '24px', md: '32px' },
                        mb: { xs: 3, md: 4 },
                        textAlign: { xs: 'center', md: 'left' },
                        maxWidth: 420,
                        fontFamily: 'Inter, sans-serif',
                    }}
                >
                    Take the first step towards smarter, simpler, and more secure financial management
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: { xs: 'center', md: 'flex-start' }, width: '100%' }}>
                    <Button
                        variant="outlined"
                        startIcon={<FaGooglePlay size={24} color="#87DFCA" />}
                        sx={{
                            borderRadius: 8,
                            borderColor: '#87DFCA',
                            color: '#fff',
                            px: 3,
                            py: 1.5,
                            fontSize: { xs: 14, md: 18 },
                            fontWeight: 500,
                            textTransform: 'none',
                            background: 'transparent',
                            '&:hover': {
                                background: '#23242A',
                                borderColor: '#A3AFFD',
                            },
                        }}
                    >
                        Play Store
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<FaApple size={24} color="#A3AFFD" />}
                        sx={{
                            borderRadius: 8,
                            borderColor: '#A3AFFD',
                            color: '#fff',
                            px: 3,
                            py: 1.5,
                            fontSize: { xs: 14, md: 18 },
                            fontWeight: 500,
                            textTransform: 'none',
                            background: 'transparent',
                            '&:hover': {
                                background: '#23242A',
                                borderColor: '#87DFCA',
                            },
                        }}
                    >
                        App Store
                    </Button>
                </Stack>
                <Typography
                    sx={{
                        color: 'rgba(147, 147, 152, 1)',
                        fontSize: { xs: 16, md: 20 },
                        fontWeight: 500,
                        textAlign: { xs: 'center', md: 'left' },
                        fontFamily: 'Inter, sans-serif',
                    }}
                >
                    Available for free
                </Typography>
            </Box>
            {/* Right Side: Phone Mockup */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    mt: { xs: 0, md: 0 },
                    zIndex: 2,
                }}
            >
                <Box
                    component="img"
                    src={moipayPhone}
                    alt="MoiPay App Mockup"
                    sx={{
                        width: { xs: 220, sm: 260, md: 340 },
                        height: { xs: 440, sm: 520, md: 650 },
                        objectFit: 'contain',
                        rotate: '5deg',
                        mr: { xs: 0, md: -6 },
                    }}
                />
            </Box>
        </Box>
    );
};

export default AllInOneFinancialSolution; 
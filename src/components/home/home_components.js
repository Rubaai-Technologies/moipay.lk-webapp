import React from "react";
import { Box, Typography, Button, Stack, Avatar, Paper } from "@mui/material";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import moipayPhone from "../../assets/logo/home/home_screen.png";

const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/54.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
];

const HomeHeroSection = () => {
    return (
        <Box
            sx={{
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                px: { xs: 6, md: 6 },
                py: 4,
            }}
        >
            {/* Heading Section */}
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    color: '#F4F4F4',
                    fontSize: { xs: 24, sm: 45, md: 55 },
                    fontFamily: '"Wix Madefor Display", sans-serif',
                    fontWeight: 700,
                    lineHeight: { xs: '48px', sm: '68px', md: '88px' },
                    width: '100%',
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                    mb: 0
                }}
            >
                Building Smart Fintech for a Digital Tomorrow
            </Typography>

            {/* Main Content Section */}
            <Box
                sx={{
                    maxWidth: 1200,
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    flex: 1,
                }}
            >
                {/* Left Content - Desktop View */}
                <Box sx={{ 
                    flex: 1, 
                    display: { xs: "none", md: "flex" }, 
                    flexDirection: "column", 
                    gap: 4 
                }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#E1E1E1',
                            fontSize: { xs: 14, md: 16 },
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '25.6px',
                            width:  '100%',
                            maxWidth: { xs: 150, md: 450 },
                            textAlign: 'left',
                            alignSelf: 'flex-start',
                            wordWrap: 'break-word',
                            mb: 2,
                            ml: { xs: 0, md: 4 }
                        }}
                    >
                        Moi Pay is a cutting-edge fintech solution built to simplify financial tasks for Sri Lankans.<br />
                        Whether it's managing daily transactions, paying bills, or accessing multiple bank services through a single platform, Moi Pay empowers users with intuitive, secure, and fast tools to take control of their financial lives. Designed for convenience and trust, Moi Pay bridges modern technology with real-world financial needs.
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        mt={1}
                        sx={{
                            alignSelf: 'flex-start',
                            width: '100%',
                            maxWidth: 450,
                            ml: { xs: 0, md: 6 }
                        }}
                    >
                        {/* Custom App Store Button */}
                        <Box
                            sx={{
                                px: { xs: 0.5, md: 3 },
                                py: 2.25,
                                borderRadius: 60,
                                outline: '1px #87DFCA solid',
                                outlineOffset: '-1px',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: 1.25,
                                cursor: 'pointer',
                                background: 'transparent',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 2px 12px 0 #87DFCA33',
                                },
                            }}
                        >
                            <Box sx={{ height: 31, display: 'inline-flex', alignItems: 'center', gap: 0, paddingLeft: 2 }}>
                                <Box sx={{
                                    width: 30.72,
                                    height: 30.72,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FaApple color='linear-gradient(90deg, #87DFCA 0%, #A3AFFD 50%, #8ABEFC 100%)' size={30} style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />

                                </Box>
                                <Typography
                                    sx={{
                                        width: { xs: 100, md: 127 },
                                        height: { xs: 12, md: 30 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#F4F4F4',
                                        fontSize: { xs: 12, md: 24 },
                                        fontFamily: '"Wix Madefor Display", sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '38.4px',
                                        ml: 2.5,
                                    }}
                                >
                                    App Store
                                </Typography>
                            </Box>
                        </Box>
                        {/* Play Store Button (unchanged) */}
                        <Box
                            sx={{
                                px: { xs: 0.5, md: 3 },
                                py: 2.25,
                                borderRadius: 60,
                                outline: '1px #87DFCA solid',
                                outlineOffset: '-1px',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: 1.25,
                                cursor: 'pointer',
                                background: 'transparent',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 2px 12px 0 #87DFCA33',
                                },
                            }}
                        >
                            <Box sx={{ height: 31, display: 'inline-flex', alignItems: 'center', gap: 0, paddingLeft: 2 }}>
                                <Box sx={{
                                    width: 30.72,
                                    height: 30.72,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FaGooglePlay color='linear-gradient(90deg, #87DFCA 0%, #A3AFFD 50%, #8ABEFC 100%)' size={30} style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />

                                </Box>
                                <Typography
                                    sx={{
                                        width: { xs: 100, md: 127 },
                                        height: { xs: 12, md: 30 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#F4F4F4',
                                        fontSize: { xs: 12, md: 24 },
                                        fontFamily: '"Wix Madefor Display", sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '38.4px',
                                        ml: 2.5,
                                    }}
                                >
                                    Play Store
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mt={3}
                        sx={{
                            alignSelf: 'flex-start',
                            width: '100%',
                            maxWidth: 600,
                            ml: { xs: 0, md: 4 }
                        }}
                    >
                        <Stack direction="row" spacing={-1}>
                            {avatars.map((src, idx) => (
                                <Avatar
                                    key={idx}
                                    src={src}
                                    alt="avatar"
                                    sx={{ width: { xs: 25, md: 50 }, height: { xs: 25, md: 50 }, border: '2px solid #181A20', zIndex: avatars.length - idx }}
                                />
                            ))}
                        </Stack>
                        <Box>
                            <Typography fontWeight={600} fontSize={{ xs: 13, md: 20 }} fontFamily='"Wix Madefor Display", sans-serif' variant="body1">1k+ business and growing</Typography>
                            <Typography fontSize={{ xs: 12, md: 16 }} fontFamily='"Wix Madefor Display", sans-serif' variant="caption" color="rgba(147, 147, 152, 1)" fontWeight={600}>
                                Backed by people's first finance solution
                            </Typography>
                        </Box>
                    </Stack>
                </Box>

                {/* Mobile Images - Show first on mobile */}
                <Box sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    minHeight: 350,
                    gap: 0,
                    order: { xs: 1, md: 2 }
                }}>
                    {/* Large Phone - Left Side */}
                    <Box
                        sx={{
                            width: { xs: 220, md: 350 },
                            height: { xs: 440, md: 600 },
                            position: "relative",
                            transform: "rotate(-4deg)",
                            zIndex: 20,
                            marginRight: "-80px"
                        }}
                    >
                        <img
                            src={moipayPhone}
                            alt="MoiPay App Mockup"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                mixBlendMode: "multiply",
                            }}
                        />
                    </Box>

                    {/* Small Phone - Right Side */}
                    <Box
                        sx={{
                            width: { xs: 180, md: 250 },
                            height: { xs: 360, md: 450 },
                            position: "relative",
                            transform: "rotate(12deg)",
                            zIndex: 10,
                            marginTop: "-10px"
                        }}
                    >
                        <img
                            src={moipayPhone}
                            alt="MoiPay App Mockup 2"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                mixBlendMode: "multiply",
                            }}
                        />
                    </Box>
                </Box>

                {/* Mobile Content - Reordered for mobile view */}
                <Box sx={{ 
                    flex: 1, 
                    display: { xs: "flex", md: "none" }, 
                    flexDirection: "column", 
                    gap: 4,
                    order: { xs: 2, md: 1 }
                }}>
                    {/* App Store Buttons - Show second on mobile */}
                    <Stack
                        direction="row"
                        spacing={2}
                        mt={1}
                        sx={{
                            alignSelf: 'center',
                            width: '100%',
                            maxWidth: 450,
                            justifyContent: 'center'
                        }}
                    >
                        {/* Custom App Store Button */}
                        <Box
                            sx={{
                                px: { xs: 0.5, md: 3 },
                                py: 1,
                                borderRadius: 60,
                                outline: '1px #87DFCA solid',
                                outlineOffset: '-1px',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: 1.25,
                                width: { xs: 150, md: 200 },
                                height: { xs: 50, md: 50 },
                                cursor: 'pointer',
                                background: 'transparent',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 2px 12px 0 #87DFCA33',
                                },
                            }}
                        >
                            <Box sx={{ height: 31, display: 'inline-flex', alignItems: 'center', gap: 0, paddingLeft: 2 }}>
                                <Box sx={{
                                    width: { xs: 25, md: 30.72 },
                                    height: { xs: 25, md: 30.72 },
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FaApple color='linear-gradient(90deg, #87DFCA 0%, #A3AFFD 50%, #8ABEFC 100%)' size={25} style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />

                                </Box>
                                <Typography
                                    sx={{
                                        width: { xs: 100, md: 127 },
                                        height: { xs: 12, md: 30 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#F4F4F4',
                                        fontSize: { xs: 12, md: 24 },
                                        fontFamily: '"Wix Madefor Display", sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '38.4px',
                                        ml: 2.5,
                                    }}
                                >
                                    App Store
                                </Typography>
                            </Box>
                        </Box>
                        {/* Play Store Button */}
                        <Box
                            sx={{
                                px: { xs: 0.5, md: 3 },
                                py: 1,
                                borderRadius: 60,
                                outline: '1px #87DFCA solid',
                                outlineOffset: '-1px',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: 1.25,
                                width: { xs: 150, md: 200 },
                                height: { xs: 50, md: 50 },
                                cursor: 'pointer',
                                background: 'transparent',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 2px 12px 0 #87DFCA33',
                                },
                            }}
                        >
                            <Box sx={{ height: 31, display: 'inline-flex', alignItems: 'center', gap: 0, paddingLeft: 2 }}>
                                <Box sx={{
                                    width: { xs: 25, md: 30.72 },
                                    height: { xs: 25, md: 30.72 },
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FaGooglePlay color='linear-gradient(90deg, #87DFCA 0%, #A3AFFD 50%, #8ABEFC 100%)' size={25} style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />

                                </Box>
                                <Typography
                                    sx={{
                                        width: { xs: 100, md: 127 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#F4F4F4',
                                        fontSize: { xs: 12, md: 24 },
                                        fontFamily: '"Wix Madefor Display", sans-serif',
                                        fontWeight: 400,
                                        ml: 2.5,
                                    }}
                                >
                                    Play Store
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>

                    {/* Description - Show third on mobile */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#E1E1E1',
                            fontSize: { xs: 14, md: 16 },
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '25.6px',
                            width: '100%',
                            maxWidth: 450,
                            textAlign: 'center',
                            alignSelf: 'center',
                            wordWrap: 'break-word',
                            mb: 2,
                            mx: { xs: 4, md: 0 }
                        }}
                    >
                        Moi Pay is a cutting-edge fintech solution built to simplify financial tasks for Sri Lankans.<br />
                        Whether it's managing daily transactions, paying bills, or accessing multiple bank services through a single platform, Moi Pay empowers users with intuitive, secure, and fast tools to take control of their financial lives. Designed for convenience and trust, Moi Pay bridges modern technology with real-world financial needs.
                    </Typography>

                    {/* Avatar Stack - Show last on mobile */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mt={3}
                        sx={{
                            alignSelf: 'center',
                            width: '100%',
                            maxWidth: 600,
                            justifyContent: 'center'
                        }}
                    >
                        <Stack direction="row" spacing={-1}>
                            {avatars.map((src, idx) => (
                                <Avatar
                                    key={idx}
                                    src={src}
                                    alt="avatar"
                                    sx={{ width: { xs: 25, md: 50 }, height: { xs: 25, md: 50 }, border: '2px solid #181A20', zIndex: avatars.length - idx }}
                                />
                            ))}
                        </Stack>
                        <Box>
                            <Typography fontWeight={600} fontSize={{ xs: 13, md: 20 }} fontFamily='"Wix Madefor Display", sans-serif' variant="body1">1k+ business and growing</Typography>
                            <Typography fontSize={{ xs: 12, md: 16 }} fontFamily='"Wix Madefor Display", sans-serif' variant="caption" color="rgba(147, 147, 152, 1)" fontWeight={600}>
                                Backed by people's first finance solution
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default HomeHeroSection;                    
import React from 'react';
import { Box, Container, Typography, IconButton, Button, Stack } from '@mui/material';
import { FaApple, FaGooglePlay, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import moipayLogo from '../assets/logo/moipay.png';

const Footer = () => {
  const footerLinks = {
    explore: ['Explore', 'Careers', 'Pricing', 'Contact us'],
    legal: ['Terms of Service', 'Privacy Policy']
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(22, 22, 22, 1)',
        color: '#F4F4F4',
        py: { xs: 4, md: 6 },
        mt: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Desktop View */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', minWidth: 120, pr: 4 }}>
            <Box component="img" src={moipayLogo} alt="MOI PAY" sx={{ height: 120, width: 'auto' }} />
          </Box>

          {/* Center Column: Heading, Description, Store Buttons, Copyright */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, minWidth: 320 }}>
            <Typography sx={{ fontSize: 23.6, fontWeight: 500, fontFamily: 'Inter, sans-serif', lineHeight: '38px', color: 'white', opacity: 0.9, mb: 1 }}>
              Simplify Your Financial World
            </Typography>
            <Typography sx={{ fontSize: 19.45, fontWeight: 400, fontFamily: 'Inter, sans-serif', lineHeight: '31.87px', color: 'white', maxWidth: 420, mb: 2 }}>
              Our global mission is for every person and business to do all things money  spending, saving, investing, borrowing, managing, and more in just a few taps.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#F4F4F4',
                  borderColor: '#87DFCA',
                  borderRadius: 60,
                  px: 4,
                  py: 1.5,
                  fontFamily: 'Wix Madefor Display',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '25.6px',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': { borderColor: '#A3AFFD', color: '#A3AFFD' },
                }}
                startIcon={<FaGooglePlay size={28} style={{ color: 'url(#playstore-gradient)' }} />}
              >
                Play Store
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#F4F4F4',
                  borderColor: '#87DFCA',
                  borderRadius: 60,
                  px: 4,
                  py: 1.5,
                  fontFamily: 'Wix Madefor Display',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '25.6px',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': { borderColor: '#A3AFFD', color: '#A3AFFD' },
                }}
                startIcon={<FaApple size={28} style={{ color: 'url(#appstore-gradient)' }} />}
              >
                App Store
              </Button>
            </Stack>
            <Typography sx={{ fontSize: 19.95, fontWeight: 400, fontFamily: 'Inter, sans-serif', color: '#939398', lineHeight: '31.87px', mt: 2 }}>
              ©2025 Rubaai. Created by <span style={{ color: 'white', fontWeight: 400 }}>RubaaiTechnologies</span>
            </Typography>
          </Box>

          {/* Explore/Legal/Social Column */}
          <Box sx={{ minWidth: 220, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* First Row: Explore and Terms of Service */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <Typography
                sx={{
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                Explore
              </Typography>
              <Typography
                sx={{
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                Terms of Service
              </Typography>
            </Box>

            {/* Second Row: Careers and Privacy Policy */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <Typography
                sx={{
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                Careers
              </Typography>
              <Typography
                sx={{
                  align: 'left',
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                Privacy Policy
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <Typography
                sx={{
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                Pricing
              </Typography>
              <Typography
                sx={{
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  cursor: 'pointer',
                  '&:hover': { color: '#87DFCA' },
                }}
              >

              </Typography>
            </Box>

            {/* Third Row: Pricing, Contact us, and Social Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Typography
                  sx={{
                    color: '#939398',
                    fontSize: 19.95,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '30.72px',
                    cursor: 'pointer',
                    '&:hover': { color: '#87DFCA' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  Contact us
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
                  <FaTiktok size={24} />
                </IconButton>
                <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
                  <FaYoutube size={24} />
                </IconButton>
                <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
                  <FaInstagram size={24} />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Mobile View */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              component="img"
              src={moipayLogo}
              alt="MOI PAY"
              sx={{ height: 80, mb: 2 }}
            />
            <Typography
              sx={{
                fontSize: 23.6,
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                lineHeight: '38px',
                color: 'white',
                opacity: 0.9,
                mb: 2
              }}
            >
              Simplify Your Financial World
            </Typography>
            <Typography
              sx={{
                fontSize: 19.45,
                fontWeight: 400,
                fontFamily: 'Inter, sans-serif',
                lineHeight: '31.87px',
                color: 'white',
                mb: 4
              }}
            >
              Our global mission is for every person and business to do all things money spending,
              saving, investing, borrowing, managing, and more in just a few taps.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button
              variant="outlined"
              sx={{
                color: '#F4F4F4',
                borderColor: '#87DFCA',
                borderRadius: 60,
                px: 4,
                py: 1.5,
                fontFamily: 'Wix Madefor Display',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '25.6px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&:hover': { borderColor: '#A3AFFD', color: '#A3AFFD' },
              }}
              startIcon={<FaGooglePlay size={28} style={{ color: 'url(#playstore-gradient)' }} />}
            >
              Play Store
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#F4F4F4',
                borderColor: '#87DFCA',
                borderRadius: 60,
                px: 4,
                py: 1.5,
                fontFamily: 'Wix Madefor Display',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '25.6px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&:hover': { borderColor: '#A3AFFD', color: '#A3AFFD' },
              }}
              startIcon={<FaApple size={28} style={{ color: 'url(#appstore-gradient)' }} />}
            >
              App Store
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
            <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
              <FaTiktok size={24} />
            </IconButton>
            <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
              <FaYoutube size={24} />
            </IconButton>
            <IconButton sx={{ borderRadius: '100px', border: '1px solid #3E3E3E', width: 44, height: 44, color: 'white', background: 'transparent', '&:hover': { background: '#232323' } }}>
              <FaInstagram size={24} />
            </IconButton>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            {[...footerLinks.explore, ...footerLinks.legal].map((link) => (
              <Typography
                key={link}
                sx={{
                  mb: 2,
                  cursor: 'pointer',
                  color: '#939398',
                  fontSize: 19.95,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30.72px',
                  '&:hover': { color: '#87DFCA' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4, pt: 4, borderTop: '1px solid rgba(244, 244, 244, 0.1)' }}>
            <Typography sx={{ fontSize: 19.95, fontWeight: 400, fontFamily: 'Inter, sans-serif', color: '#939398', lineHeight: '31.87px' }}>
              ©2025 Rubaai. Created by <span style={{ color: 'white', fontWeight: 400 }}>RubaaiTechnologies</span>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
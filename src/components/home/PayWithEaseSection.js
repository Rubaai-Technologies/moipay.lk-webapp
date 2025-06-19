import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import womanImg from "../../assets/home/paywithease.png";
import cardIcon from "../../assets/home/icon_row_04.png";
import phoneIcon from "../../assets/home/icon_row_03.png";
import cashIcon from "../../assets/home/icon_row_02.png";
import handshakeIcon from "../../assets/home/icon_row_01.png";

// Payment-related icon images (replace with your own if needed)
const iconList = [
  cardIcon,
  phoneIcon,
  cashIcon,
  handshakeIcon
];

const PayWithEaseSection = () => (
  <Box
    sx={{
      width: '100%',
      bgcolor: { xs: 'transparent', md: 'rgba(20, 21, 22, 0.5)' },
      color: '#F4F4F4',
      borderRadius: { xs: 0, md: 4 },
      px: { xs: 2, md: 10 },
      py: { xs: 4, md: 8 },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: { xs: 4, md: 8 },
      minHeight: { xs: 'auto', md: 500 },
    }}
  >
    {/* Left/Text Section */}
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
        textAlign: { xs: 'center', md: 'left' },
        mb: { xs: 4, md: 0 },
      }}
    >
      <Typography
        sx={{
          color: 'rgba(161, 161, 166, 1)',
          fontWeight: 700,
          fontSize: { xs: 20, md: 24 },
          mb: { xs: 2, md: 3 },
        }}
      >
        What we bring to the table?
      </Typography>
      {/* Mobile Image (below heading, only on mobile) */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          width: '100%',
          maxWidth: 340,
          mx: 'auto',
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={womanImg}
          alt="Pay with Ease"
          sx={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
            borderRadius: 3,
            boxShadow: 2,
          }}
        />
      </Box>
      {/* Icon Images */}
      <Stack direction="row" spacing={ { xs: 1, md: 3 }} justifyContent={{ xs: 'center', md: 'flex-start' }} mb={{ xs: 2, md: 2 }}>
        {iconList.map((icon, idx) => (
          <Box>
            <img
              key={idx}
              src={icon}
              alt="icon"
              sx={{
                width: { xs: 25, md: 90 },
                height: { xs: 25, md: 90 },
                objectFit: 'contain',
                display: 'block',
                margin: 'auto',
              }}
            />
          </Box>
        ))}
      </Stack>
      <Typography
        sx={{
          color: 'rgba(244, 244, 244, 1)',
          fontWeight: 500,
          fontSize: 16,
          mb: { xs: 1, md: 2 },
        }}
      >
        One app for every payment
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 24, md: 64 },
          lineHeight: { xs: '38px', md: '60px' },
          mb: { xs: 2, md: 3 },
          textAlign: { xs: 'left', md: 'left' },
        }}
      >
        Pay with Ease
      </Typography>
      <Typography
        sx={{
          color: '#A1A1A6',
          fontWeight: 400,
          fontSize: { xs: 14, md: 18 },
          mb: { xs: 2, md: 3 },
          maxWidth: 500,
          textAlign: { xs: 'left', md: 'left' },
        }}
      >
        Manage utility bills, online shopping, and more — all through a secure, seamless app. Link your cards and accounts once, and you're set to pay anytime, anywhere.
      </Typography>
      <Box component="ul" sx={{
        color: 'rgba(244, 244, 244, 1)',
        fontSize: { xs: 14, md: 16 },
        fontWeight: { xs: 500, md: 600 },
        fontFamily: '"Wix Madefor Display", sans-serif',
        pl: { xs: 2, md: 3 },
        textAlign: { xs: 'left', md: 'left' },
        mb: 0,
        listStyleType: 'disc',
        listStylePosition: 'outside',
        m: 0,
        p: 0,
      }}>
        <li>Go fully cashless with confidence</li>
        <li>Pay bills in seconds — utilities, services, and more</li>
        <li>One dashboard for all your payments</li>
        <li>Industry-grade security (PCI DSS certified)</li>
      </Box>
    </Box>
    {/* Right/Image Section (desktop only) */}
    <Box
      sx={{
        flex: 1,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: { md: 420 },
        mx: 'auto',
      }}
    >
      <Box
        component="img"
        src={womanImg}
        alt="Pay with Ease"
        sx={{
          width: '100%',
          height: { md: 340 },
          objectFit: 'cover',
          borderRadius: 6,
          boxShadow: 4,
        }}
      />
    </Box>
  </Box>
);

export default PayWithEaseSection; 
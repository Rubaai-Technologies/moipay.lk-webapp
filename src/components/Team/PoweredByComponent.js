import React from 'react';
import { Box, Typography } from '@mui/material';
import multiImg from '../../assets/team/multi_img.png';

const PoweredByComponent = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            color: '#fff',
            py: { xs: 0, md: 1 },
            px: { xs: 2, md: 4 },
        }}>
            <Typography variant="h4" component="h2" sx={{
                fontWeight: 700,
                color: 'rgba(161, 161, 166, 1)',
                fontSize: { xs: '20px', md: '55px' },
                fontFamily: '"Wix Madefor Display", sans-serif',
                mb: { xs: 3, md: 5 },
                px: { xs: 2, md: 0 },
                textAlign: { xs: 'left', md: 'left' },
                lineHeight: { xs: '32px', md: '160%' }
            }}>
                Powered by Rubaai Technologies, we combine startup energy with deep financial expertise.
            </Typography>
            <Box
                component="img"
                src={multiImg}
                alt="Team collage"
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    mx: 'auto',
                    mb: { xs: 3, md: 5 },
                }}
            />
            <Box sx={{
                maxWidth: '800px',
                textAlign: 'left',
                fontFamily: '"Inter", sans-serif',
            }}>
                <Typography sx={{
                    fontSize: { xs: '14px', md: '20px' },
                    lineHeight: { xs: '24px', md: '160%' },
                    mb: 2,
                    fontFamily: '"Wix Madefor Display   ", sans-serif',
                }}>
                    "At Moi Pay, collaboration is more than a process — it's our culture. Every feature, flow, and interaction is thoughtfully designed by a team who cares deeply about users."
                </Typography>
                <Typography sx={{
                    fontSize: { xs: '16px', md: '20px' },
                    lineHeight: { xs: '24px', md: '30px' },
                    mb: 4,
                }}>
                    We're proud to be building a product that helps people manage money with confidence, clarity, and control.<br />  — Moi Pay Product Team
                </Typography>
            </Box>
        </Box>
    );
};

export default PoweredByComponent; 
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import randomImg04 from '../../assets/home/randomImg04.png';

const MeetTheTeam = () => {
    return (
        <Container maxWidth="100%" sx={{ mb: 4, px: { xs: '30px', md: '100px' } }}>
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
    );
};

export default MeetTheTeam; 
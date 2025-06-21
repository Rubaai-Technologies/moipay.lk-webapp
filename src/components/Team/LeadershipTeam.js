import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Ganeshwaran from '../../assets/home/ganeswaran.jpg';
import Croos from '../../assets/home/croos.jpg';
import Joice from '../../assets/home/joice.jpg';
import Roman from '../../assets/home/roman.png';

const LeadershipTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "E Ganeshwaran",
            position: "CEO and Founder",
            image: Ganeshwaran,
            alt: "E Ganeshwaran"
        },
        {
            id: 2,
            name: "I Andrewson Croos",
            position: "CTO",
            image: Croos,
            alt: "I Andrewson Croos"
        },
        {
            id: 3,
            name: "J Joice Peries",
            position: "GM",
            image: Joice,
            alt: "J Joice Peries"
        },
        {
            id: 4,
            name: "Roman Figurado",
            position: "Operations Manager",
            image: Roman,
            alt: "Roman"
        }
    ];

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
            
            {/* Desktop/Web View - Horizontal Scroll */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                justifyContent: 'start',
                overflowX: 'auto',
                gap: 5,
                pb: 2,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
            }}>
                {teamMembers.map((member) => (
                    <Box key={member.id} sx={{
                        position: 'relative',
                        width: '363px',
                        height: '474px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: 2,
                        flexShrink: 0,
                    }}>
                        <img
                            src={member.image}
                            alt={member.alt}
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
                                {member.name}
                            </Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: 24, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                {member.position}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Mobile View - Column Layout */}
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                gap: 3,
                px: 2,
            }}>
                {teamMembers.map((member) => (
                    <Box key={member.id} sx={{
                        position: 'relative',
                        width: '100%',
                        height: '474px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: 2,
                    }}>
                        <img
                            src={member.image}
                            alt={member.alt}
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
                            <Typography sx={{ fontWeight: 600, fontSize: 24, fontFamily: '"Inter", sans-serif' }}>
                                {member.name}
                            </Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: 18, fontFamily: '"Inter", sans-serif', opacity: 0.85 }}>
                                {member.position}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default LeadershipTeam; 
import React from 'react';
import { Box } from '@mui/material';
import PoweredByComponent from './PoweredByComponent';
import MeetTheTeam from './MeetTheTeam';
import LeadershipTeam from './LeadershipTeam';
import AllInOneFinancialSolution from '../home/AllInOneFinancialSolution';

const OurTeamComponent = () => {
    return (
        <Box sx={{ bgcolor: 'linear-gradient(90deg, #181C1F 0%, #23272A 100%)', minHeight: '100vh', py: 4 }}>
            <MeetTheTeam />
            <PoweredByComponent />
            <LeadershipTeam />
            <AllInOneFinancialSolution />
        </Box>
    );
};

export default OurTeamComponent;

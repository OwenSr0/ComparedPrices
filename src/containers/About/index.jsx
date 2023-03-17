import React from "react";
import { Box } from '@mui/material';
import AboutHeader from './Header/index';
import BodyInfo from './Body/index';
import ComparoFooter from './Footer/index';

const About = () => {
    return(
        <Box>
            <AboutHeader />
            <BodyInfo />
            <ComparoFooter />
        </Box>
    )
}

export default About;
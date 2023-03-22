import React from "react";
import { Box } from '@mui/material';
import BodyInfo from './Body/index';
import FullHeader from '../../components/Header/FullHeader/index';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';

const About = () => {
    const title = 'Acerca de Comparo';
    return(
        <Box>
            <FullHeader title={title}/>
            <BodyInfo />
            <HalfFooterPrivacy />
        </Box>
    )
}

export default About;
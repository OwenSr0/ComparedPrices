import React from "react";
import { Box } from '@mui/material';
import BodyInfo from './Body/index';
import FullHeader from '../../components/Header/FullHeader/index';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';

const About = (props) => {
    const region = props.region;
    const title = 'Acerca de Comparo';
    return(
        <Box>
            <FullHeader title={title} region={region}/>
            <BodyInfo />
            <HalfFooterPrivacy region={region}/>
        </Box>
    )
}

export default About;
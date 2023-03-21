import React from "react";
import { Box } from '@mui/material';
import BodyInfo from './Body/index';
import ComparoFooter from './Footer/index';
import FullHeader from '../../components/Header/FullHeader/index'

const About = () => {
    const title = 'Acerca de Comparo';
    return(
        <Box>
            <FullHeader title={title}/>
            <BodyInfo />
            <ComparoFooter />
        </Box>
    )
}

export default About;
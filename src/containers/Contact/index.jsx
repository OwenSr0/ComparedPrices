import React from "react";
import { Box } from '@mui/material';
import DefaultHeader from '../../components/Header/index';
import BodyContact from './Body/index';
import FullFooter from '../../components/Footer/FullFooter/index';

const Contact = (props) => {
    const region = props.region;

    return(
        <Box sx={stackStyle}>
            <Box >
                <DefaultHeader region={region}/>
                <BodyContact />
            </Box>

            <FullFooter region={region}/>
        </Box>
    )
}

export default Contact;

const stackStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}
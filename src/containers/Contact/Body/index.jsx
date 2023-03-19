import React from "react";
import { Box } from '@mui/material';
import ContactUs from './ContactUs/index';
import SupportContact from './Support/index';

const BodyContact = () => {
    return(
        <Box sx={stackStyle}>
            <ContactUs />
            <SupportContact />
        </Box>
    )
}

export default BodyContact;

const stackStyle = {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'space-evenly'
}
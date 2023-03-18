import React from "react";
import { Box } from '@mui/material';
import InfoToS from './ToS/index';
import InfoPrivacy from './Privacy/index';

const InfoBody = () => {
    return(
        <Box sx={stackStyle}>
            <InfoToS />
            <InfoPrivacy />
        </Box>
    )
}

export default InfoBody;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em'
}
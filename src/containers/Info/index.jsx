import React from "react";
import { Box } from '@mui/material';
import InfoHeader from './Header/index';
import InfoBody from './Body/index';
import FullFooter from'../../components/Footer/FullFooter/index';

const Info = () => {
    return(
        <Box>
            <InfoHeader />
            <InfoBody />
            <FullFooter />
        </Box>
    )
}

export default Info;
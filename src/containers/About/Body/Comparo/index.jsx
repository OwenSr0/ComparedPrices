import React from "react";
import { Box } from '@mui/material';
import ComparoHeader from './ComparoHeader/index';
import ComparoInfo from './ComparoInfo/index';
import ComparoSocial from './ComparoSocial/index';

const BodyComparo = () => {
    return(
        <Box>
            <ComparoHeader />
            <ComparoInfo />
            <ComparoSocial />
        </Box>
    )
}

export default BodyComparo;
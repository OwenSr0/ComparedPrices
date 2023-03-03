import React from "react";
import { Box } from '@mui/material';
import ComparoHeader from './Header/index'
import ComparoBody from './Body/index'

const Comparo = () => {
    return(
        <Box>
            <ComparoHeader />
            <ComparoBody />
        </Box>
    )
}

export default Comparo;
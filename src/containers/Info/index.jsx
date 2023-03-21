import React from "react";
import { Box } from '@mui/material';
import FullHeader from '../../components/Header/FullHeader/index'
import InfoBody from './Body/index';
import HalfFooterToS from '../../components/Footer/HalfFooterToS/index'

const Info = () => {
    const title = 'Información';
    return(
        <Box>
            <FullHeader title={title}/>
            <InfoBody />
            <HalfFooterToS />
        </Box>
    )
}

export default Info;
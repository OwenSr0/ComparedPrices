import React from "react";
import { Box } from '@mui/material';
import FullHeader from '../../components/Header/FullHeader/index';
import InfoBody from './Body/index';
import HalfFooterToS from '../../components/Footer/HalfFooterToS/index';

const Info = (props) => {
    const region = props.region;
    const title = 'Información';
    return(
        <Box>
            <FullHeader title={title} region={region}/>
            <InfoBody />
            <HalfFooterToS region={region}/>
        </Box>
    )
}

export default Info;
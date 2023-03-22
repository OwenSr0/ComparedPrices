import React from "react";
import { Box } from '@mui/material';
import BodyComparo from './Comparo/index'
import BodyAutor from './Autor/index';

const BodyInfo = () => {
    return(
        <Box>
            <BodyComparo />
            <BodyAutor />
        </Box>
    )
}

export default BodyInfo;


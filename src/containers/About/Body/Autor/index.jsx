import React from "react";
import { Box, Typography } from '@mui/material';
import AutorInfo from './AutorInfo/index';
import AutorImg from './AutorImg/index';
import AutorSocial from './AutorSocial/index';

const BodyAutor = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy}>Autor</Typography>
            <Box sx={stackBox}>
            
                <AutorSocial />
                <AutorImg />
                <AutorInfo />
            </Box>
            

        </Box>
    )
}

export default BodyAutor;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em'
}

const stackBox = {
    display: 'flex',
    alignItems: 'center'
}

const stackTy = {
    fontSize: '1.3em'
}
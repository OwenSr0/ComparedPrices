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
    marginTop: {
        xs: '3em',
        sm: '1em'
    }
}

const stackBox = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        sm: 'row'
    },
    flexWrap: {
        sm: 'wrap',
        lg: 'nowrap'
    },
    justifyContent: {
        sm: 'center',
        lg: '0'
    },
    alignItems: 'center'
}

const stackTy = {
    fontSize: {
        xs: '1.6em',
        sm: '1.3em'
    }
}
import React from "react";
import { Box, Typography } from '@mui/material';
import ItemComparo from './ItemComparo/index'

const Comparo = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackHeader}>
                <Typography sx={stackTy}>title</Typography>
                <Typography sx={stackTy1}>platform</Typography>
                <Typography sx={stackTy2}>price</Typography>
            </Box>
            <Box>
                <ItemComparo />

            </Box>
        </Box>
    )
}

export default Comparo;

const stackStyle = {
    background: '#242526',
    height: '10em',
    overflow: 'auto',
    borderRadius: '25px',
    margin: '1em',
    padding: '1em'
}

const stackHeader = {
    display: 'flex'
}

const stackTy = {
    width: '40vh',
    margin: '0.5em',
    textAlign: 'center'
}

const stackTy1 = {
    width: '20vh',
    margin: '0.5em',
    textAlign: 'center'
}

const stackTy2 = {
    width: '10vh',
    margin: '0.5em',
    textAlign: 'center'
}
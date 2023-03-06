import React from "react";
import { Box, Typography, Button } from '@mui/material';

const ItemComparo = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy}>uwu shit</Typography>
            <Typography sx={stackTy1}>Mercado Libre</Typography>
            <Typography sx={stackTy2}>$99999</Typography>
            <Button sx={stackButton}>Buy</Button>
        </Box>
    )
}

export default ItemComparo;

const stackStyle = {
    display: 'flex',
    overflow: 'auto',
    alignItems: 'center'
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

const stackButton = {
    width: '10vh',
    height: '2.5em'
}

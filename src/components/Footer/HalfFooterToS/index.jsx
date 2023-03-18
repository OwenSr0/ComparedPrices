import React from "react";
import { Box, Typography, Link } from '@mui/material';

const HalfFooterToS = () => {
    return(
        <Box sx={stackStyle}>
            <Link href="/" sx={stackText2}>Condiciones de uso</Link>
            <Typography sx={stackText1}>2023 © Comparo</Typography>
            <Link href="/" sx={stackText2}>Aviso de privacidad</Link>
        </Box>
    )
}

export default HalfFooterToS;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'2em',
    height: '2em'
}

const stackText1 = {
    fontSize: '16px',
    margin: '0 3em 0 3em'
}

const stackText2 = {
    width: '11em',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '3px'
}

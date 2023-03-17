import React from "react";
import { Box, Typography, Link } from '@mui/material';

const ComparoFooter = () => {
    return(
        <Box sx={stackStyle}>
            <Link href="/" sx={stackText2}>About</Link>
            <Link href="/" sx={stackText2}>Autor</Link>
            <Typography sx={stackText1}>Comparo © 2023</Typography>
            <Link href="/" sx={stackText2}>Terminos y condiciones</Link>
            <Link href="/" sx={stackText2}>Aviso de privacidad</Link>
        </Box>
    )
}

export default ComparoFooter;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop:'2em'
}

const stackText1 = {
    fontSize: '16px',
    marginRight: '1em',
    marginLeft: '4em'
}

const stackText2 = {
    fontSize: '18px',
    marginBottom: '3px'
}
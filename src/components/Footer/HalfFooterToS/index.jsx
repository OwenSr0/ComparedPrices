import React from "react";
import { Box, Typography, Link } from '@mui/material';

const HalfFooterToS = () => {
    return(
        <Box sx={stackStyle}>
            <Link href="/about" sx={stackText2}>About</Link>
            <Typography sx={stackText1}>2023 © Comparo</Typography>
            <Link href="/about" sx={stackText2}>Autor</Link>
        </Box>
    )
}

export default HalfFooterToS;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'0',
    height: {
        xs: '3em',
        lg: '2em'
    }
}

const stackText1 = {
    textAlign: 'center',
    fontSize: {
        xs: '16px',
        sm: '16px'
    },
    margin: {
        sm: '0 1em 0 1em',
        lg: '0 3em 0 3em'
    },
    width: {
        xs: '12em',
        sm: '14em',
        md: '10em',
        lg: 'auto'
    }
}

const stackText2 = {
    width: '11em',
    textAlign: 'center',
    fontSize: {
        xs: '14px',
        sm: '18px'
    },
    marginBottom: '3px'
}

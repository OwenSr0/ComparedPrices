import React from "react";
import { Box, Typography, Link } from '@mui/material';

const HalfFooterPrivacy = (props) => {
    const region = props.region;
    return(
        <Box sx={stackStyle}>
            <Link href={`/${region}/info`} sx={stackText2}>Condiciones de uso</Link>
            <Typography sx={stackText1}>2023 © Comparo</Typography>
            <Link href={`/${region}/info`} sx={stackText2}>Aviso de privacidad</Link>
        </Box>
    )
}

export default HalfFooterPrivacy;

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
        xs: '0 1em 0 1em',
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

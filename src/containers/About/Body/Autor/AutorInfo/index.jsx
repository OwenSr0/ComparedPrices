import React from "react";
import { Box, Typography } from '@mui/material';

const AutorInfo = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy1}>Owen Bueno</Typography>
            <Typography sx={stackTy2}>
                Hola soy Owen, creador de Comparo Land. Soy un novato en esta industria y decidí embarcarme en este proyecto
                por la dificultad de encontrar el mejor precio de manera agil.
                Me puedes encontrar Twitter.
            </Typography>

            </Box>
    )
}

export default AutorInfo;

const stackStyle = {
    width: {
        xs: '16em',
        sm: '12em'
    },
    margin: '1em',
    order: {
        xs: '-1',
        sm: '0'
    }
}

const stackTy1 = {
    textAlign: 'center',
    fontSize: '1.2em'
}

const stackTy2 = {
    marginTop: '0.7em',
    textAlign: 'justify',
    fontSize: {
        xs: '22px',
        sm: '24px'
    }
}
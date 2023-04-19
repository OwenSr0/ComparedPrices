import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoHeader = () => {
    return(
        <Box sx={stackStyle}>
            <a href="home"><img src="/favicon.png" alt="logo" width='150px' height='150px'/></a>
            <Typography sx={stackTy}>
                Nuestro objetivo es lograr que ahorres más en cada compra
            </Typography>
        </Box>
    )
}

export default ComparoHeader;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: {
        xs: '1em',
        sm: '2em',
        lg: '1em'
    }
}

const stackTy = {
    margin: {
        xs: '0.3em 1em 0 1em',
        sm: '0.3em 3em 0 3em',
        md: '0.3em 1em 0 1em'
    },
    fontSize: {
        xs: '1em',
        sm: '1.5em',
        lg: '1.1em'
    },
    textAlign: 'center'

}
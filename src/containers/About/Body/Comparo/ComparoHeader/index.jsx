import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoHeader = () => {
    return(
        <Box sx={stackStyle}>
            <a href="/"><img src="./favicon.png" alt="logo" width='150px' height='150px'/></a>
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
    marginTop: '1em'
}

const stackTy = {
    marginTop: '0.3em',
    fontSize: '1.1em'
}
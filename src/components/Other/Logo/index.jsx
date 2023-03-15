import React from "react";
import { Box } from '@mui/material';

const Logo = () => {
    return(
        <Box sx={stactStyle}>
            <a href="/"><img src="./favicon.png" alt="Logo"  width="55" height="55" /></a>
        </Box>
    )
}

export default Logo;

const stactStyle = {
    gridColumnStart: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.2em',
    marginBottom: '0.2em',
}
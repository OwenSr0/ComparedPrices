import React from "react";
import { Box } from '@mui/material';
import './index.css'

const Logo = () => {
    return(
        <Box sx={stactStyle}>
            <a href="/"><img src="./favicon.png" alt="Logo"  width={'60px'} id="img"/></a>
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


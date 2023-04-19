import React from "react";
import { Box } from '@mui/material';
import './index.css'

const Logo = (props) => {
    const region = props.region;

    return(
        <Box sx={stactStyle}>
            <a href={`/${region}`}><img src="/favicon.png" alt="Logo"  width='60px' id="img"/></a>
        </Box>
    )
}

export default Logo;

const stactStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


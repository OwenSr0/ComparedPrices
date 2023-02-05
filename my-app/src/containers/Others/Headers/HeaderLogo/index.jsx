import React from "react";
import { Box } from '@mui/material';

const StackStyle = {
    display: 'flex',

}

const StactBox = {
    display: 'flex',
    marginTop: '0.2em',
    marginLeft: '2em',
    marginBottom: '0.2em',

}

const HeaderLogo = () =>{
    return(
        <Box sx={StackStyle}>
            <Box sx={StactBox}>
                <a href="home"><img src="./img/logo.png" alt="Logo"  width="50" height="50" /></a>
            </Box>
            
        </Box>
    )
}

export default HeaderLogo;

import React from "react";
import { Box } from '@mui/material';   
import Home from '../../../components/Buttons/Home/index'

const LoginHeader = () =>{
    return(
        <Box sx={StackStyle}>
            <Box sx={StactBox}>
                <a href="home"><img src="./img/logo.png" alt="Logo"  width="50" height="50" /></a>
            </Box>
            <Home/>
        </Box>
    )
}

export default LoginHeader;

const StackStyle = {
    display: 'flex',
    justifyContent: 'space-between',

}

const StactBox = {
    display: 'flex',
    marginTop: '0.2em',
    marginBottom: '0.2em',

}

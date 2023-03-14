import React from "react";
import { Box } from '@mui/material';   
import Home from '../../../components/Buttons/Home/index'
import Logo from '../../../components/Other/Logo/index'

const LoginHeader = () =>{
    return(
        <Box sx={stackStyle}>
            <Logo />
            <Home/>
        </Box>
    )
}

export default LoginHeader;

const stackStyle = {
    display: 'flex',
    justifyContent: 'space-between',

}

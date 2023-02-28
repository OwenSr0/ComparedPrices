import React from "react";
import { Box } from '@mui/material';   
import Home from '../../../components/Buttons/Home/index';


const HeaderRegister = () =>{
    return(
        <Box sx={StackStyle}>
            <Box sx={StactBox}>
                <a href="home"><img src="./img/logo.png" alt="Logo"  width="50" height="50" /></a>
            </Box>
            <Home/>
        </Box>
    )
}

export default HeaderRegister;

const StackStyle = {
    display: 'flex',
    justifyContent: 'space-around',

}

const StactBox = {
    display: 'flex',
    marginTop: '0.2em',
    marginBottom: '0.2em',

}

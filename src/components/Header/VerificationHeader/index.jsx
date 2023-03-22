import React from "react";
import { Box } from '@mui/material';   
import Home from '../../Buttons/Home/index'
import Logo from '../../Other/Logo/index'

const VerificationHeader = () =>{
    return(
        <Box sx={stackStyle}>
            <Logo />
            <Home/>
        </Box>
    )
}

export default VerificationHeader;

const stackStyle = {
    display: 'flex',
    justifyContent: {
        xs: 'space-around',
        lg: 'space-between'
    },
    marginTop: {
        sm: '20px',
        md: '1em'
    }

}

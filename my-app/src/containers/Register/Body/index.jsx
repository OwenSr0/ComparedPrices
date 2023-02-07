import React from "react";
import { Box } from '@mui/material';
import RegisterForm from './Form/index';
import RegisterHub from './Container/index'

const BodyRegister = () => {
    return(
        <Box sx={StackStyle}>
            <RegisterHub />
            <RegisterForm />
        </Box>
    )
}

export default BodyRegister;

const StackStyle = {
    display: 'flex',
    justifyContent: 'center',
}
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
    flexDirection: {
        sm: 'column',
        lg: 'row'
    },
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: {
        lg: '1em',
        xl: '0'
    }
}
import React from 'react';
import { Container } from '@mui/material';
import HeaderLogo from '../Others/Headers/HeaderLogo';
import BodyLogin from './Body';

const Login = () => {

    return(
        <Container sx={StackStyle}>
            <HeaderLogo/>
            <BodyLogin />
        </Container>
        
    )
}

export default Login;

const StackStyle = {
    display: 'flex',
    flexDirection: 'column',

}
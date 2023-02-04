import React from 'react';
import { Container } from '@mui/material';
import HeaderLogo from '../Others/Headers/HeaderLogo';
import BodyLogin from './Body';

const Login = () => {

    return(
        <Container>
            <HeaderLogo/>
            <BodyLogin />
        </Container>
        
    )
}

export default Login;
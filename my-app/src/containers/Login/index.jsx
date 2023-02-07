import React from 'react';
import { Container } from '@mui/material';
import HeaderLogoHome from '../Others/Headers/HeaderLogoHome';
import BodyLogin from './Body';

const Login = () => {

    return(
        <Container sx={StackStyle}>
            <HeaderLogoHome/>
            <BodyLogin />
        </Container>
        
    )
}

export default Login;

const StackStyle = {
    display: 'flex',
    flexDirection: 'column',

}
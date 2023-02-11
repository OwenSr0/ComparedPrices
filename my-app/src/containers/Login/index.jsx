import React, {useEffect, useState} from 'react';
import { Container } from '@mui/material';
import HeaderLogoHome from '../Others/Headers/HeaderLogoHome';
import BodyLogin from './Body';
import {useNavigate} from 'react-router-dom'
import SignFooter from '../Others/Footer/Sign/index';

const Login = () => {
    const[user, setUser]=useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUserToken = window.localStorage.getItem('loggedAppUser')
        if(loggedUserToken){
            setUser(loggedUserToken)
        }
    }, [])

        if (user){
            navigate("/home")
        }

    return(
        <Container sx={stackStyle}>
            
            <HeaderLogoHome/>
            <BodyLogin />
            <SignFooter />
        </Container>
        
    )
}

export default Login;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
}
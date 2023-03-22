import React, {useEffect, useState} from 'react';
import { Container } from '@mui/material';
import VerificationHeader from '../../components/Header/VerificationHeader/index';
import BodyLogin from './Body';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';
import {useNavigate} from 'react-router-dom';

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
            <VerificationHeader />
            <BodyLogin />
            <HalfFooterPrivacy />
        </Container>
        
    )
}

export default Login;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: {
        xs: '85vh',
        sm: '100vh'
    }
}
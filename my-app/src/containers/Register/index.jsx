import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import HeaderRegister from './Header/index';
import BodyRegister from './Body/index'
import {useNavigate} from 'react-router-dom'
import SignFooter from '../Others/Footer/Sign/index';

const Register = () => {

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
        <Box sx={stackStyle}>
            <HeaderRegister />
            <BodyRegister/>
            <SignFooter />
        </Box>
    )
}

export default Register;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
}
import React, {useEffect} from 'react';
import { Box, Container } from '@mui/material';
import VerificationHeader from '../../components/Header/VerificationHeader/index';
import BodyRegister from './Body/index';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';

import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const loggedUserToken = window.localStorage.getItem('loggedAppUser')

    useEffect(() => {
        if(loggedUserToken){
            navigate("/")
        } 
    }, [ navigate, loggedUserToken])

    return(
        <Box >
        { !loggedUserToken &&
            <Box sx={stackStyle}>
                <Container><VerificationHeader /></Container>
                <BodyRegister/>
                <HalfFooterPrivacy />
            </Box>
        }
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
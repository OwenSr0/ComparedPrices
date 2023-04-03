import React, {useEffect} from 'react';
import { Container } from '@mui/material';
import VerificationHeader from '../../components/Header/VerificationHeader/index';
import BodyLogin from './Body';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const loggedUserToken = window.localStorage.getItem('loggedAppUser')

    useEffect(() => {
        if(loggedUserToken){
            navigate("/")
        } 
    }, [navigate, loggedUserToken])

    return(
        <div>
            { !loggedUserToken &&
            <Container sx={stackStyle}>
                <VerificationHeader />
                <BodyLogin />
                <HalfFooterPrivacy />
            </Container>
            }
        </div>
        
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
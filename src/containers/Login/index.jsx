import React, {useEffect} from 'react';
import { Container } from '@mui/material';
import VerificationHeader from '../../components/Header/VerificationHeader/index';
import BodyLogin from './Body';
import HalfFooterPrivacy from '../../components/Footer/HalfFooterPrivacy/index';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const region = props.region;

    const navigate = useNavigate();
    const loggedUserToken = window.localStorage.getItem('loggedAppUser')

    useEffect(() => {
        if(loggedUserToken){
            navigate(`/${region}`)
        } 
    }, [navigate, loggedUserToken, region])

    return(
        <div>
            { !loggedUserToken &&
            <Container sx={stackStyle}>
                <VerificationHeader region={region}/>
                <BodyLogin region={region}/>
                <HalfFooterPrivacy region={region}/>
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
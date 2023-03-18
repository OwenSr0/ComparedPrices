import React, {useState} from "react";
import { Container, Box, Link, Typography } from '@mui/material';
import axios from 'axios';
import LoginField from '../../../components/TextField/Login/Email/index'
import PasswordField from '../../../components/TextField/Login/Password/index'
import {useNavigate} from 'react-router-dom'


const BodyLogin = () => {
    const navigate = useNavigate();

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    function login(){
        var validate = {
            email: email,
            password: password,
        }
        axios.post('/api/user/login', validate)
        .then(res => {
            console.log(res.data)
            window.localStorage.setItem(
                'loggedAppUser', res.data.token 
            )
            navigate("/home")
        })
        .then(err =>{console.log(err)})

    }

    return(
        <Container sx={stackContainer}>
                <Box sx={stackStyle}>
                    <h2 className='mt-4'>Inicia Sesion</h2>
                </Box>
                <Box sx={stackTextField}>
                    <LoginField setEmail={setEmail}/>
                    <PasswordField setPassword={setPassword}/>
                </Box>
                <Box sx={stackStyle}>
                    <button onClick={login} className='btn btn-success'>Iniciar Sesion</button>
                </Box>
                <Box sx={stackBox}>
                    <Typography sx={{fontSize:'16px', marginRight:'10px', marginLeft: '5em'}}>No tienes cuenta?  </Typography>
                    <Link sx={stackLink} href="register" >Registrate</Link>
                </Box>
                
            </Container>
    )
}

export default BodyLogin;

const stackTextField ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

const stackStyle = {
    display:'flex',
    justifyContent:'center',
    marginBottom: '1em'
}

const stackContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
    maxWidth:{xs:'40vw', md:'100%', lg:'600px'},
    borderRadius: '25px',
}

const stackBox = {
    display: 'flex'
}

const stackLink = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '16px',
    marginBottom: '1em'

  }
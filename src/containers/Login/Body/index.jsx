import React, { useState } from "react";
import axios from 'axios';
import LoginField from '../../../components/TextField/Login/Email/index';
import PasswordField from '../../../components/TextField/Login/Password/index';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Link, Typography } from '@mui/material';
import Turnstile from "react-turnstile";


const BodyLogin = () => {
    const navigate = useNavigate();

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    async function login() {
        if (!email || !password) {
            alert('Rellena todos los campos');
            return false;
        }
        try {
          const validate = {
            email: email,
            password: password,
          };
          const res = await axios.post('https://backend.comparo.land/api/user/login', validate);
          window.localStorage.setItem('loggedAppUser', res.data.token);
          navigate('/home');
        } catch (error) {
          console.log(error);
        }
      }

    return(
        <Container sx={stackStyle}>
                <Box sx={stackBox}>
                    <h2 className='mt-4'>Inicia Sesión</h2>
                </Box>
                <Box sx={stackTextField}>
                    <LoginField setEmail={setEmail} login={login}/>
                    <PasswordField setPassword={setPassword} login={login}/>
                </Box>
                <Turnstile
                    sitekey="0x4AAAAAAAD2hnSRwvyh4g00"
                    autoResetOnExpire={true}
                    onVerify={(token) => alert(token)}
                />
                <Box sx={stackBox}>
                    <button onClick={login} className='btn btn-success'>Iniciar Sesión</button>
                </Box>
                <Box sx={stackBox1}>
                    <Typography sx={stackTy2}>¿No tienes cuenta?</Typography>
                    <Link sx={stackLink} href="register" >Registrate</Link>
                </Box>
                
            </Container>
    )
}

export default BodyLogin;

const stackStyle = {
    background: '#242526',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:{
    xs:'90%',
    sm:'70%',
    lg:'600px'
    },
    borderRadius: '25px',
}

const stackTextField ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

const stackBox = {
    display:'flex',
    justifyContent:'center',
    marginBottom: '1em'
}

const stackBox1 = {
    display: 'flex',
    justifyContent: {
        xs: 'center',
        sm: '0'
    }
}

const stackLink = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '16px',
    margin: '1px 0.5em 1em 0.5em'

  }

const stackTy2 = {
    fontSize:'16px',
    margin: '2px 0.5em 0 0.5em'
    
}
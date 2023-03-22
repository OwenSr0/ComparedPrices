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
        <Container sx={stackStyle}>
                <Box sx={stackBox}>
                    <h2 className='mt-4'>Inicia Sesión</h2>
                </Box>
                <Box sx={stackTextField}>
                    <LoginField setEmail={setEmail}/>
                    <PasswordField setPassword={setPassword}/>
                </Box>
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
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
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
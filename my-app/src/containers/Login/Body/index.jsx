import React, {useState} from "react";
import { Container, Box, Link, Typography } from '@mui/material';
import axios from 'axios';
import LoginField from '../../../components/TextField/Login/Email/index'
import PasswordField from '../../../components/TextField/Login/Password/index'


const BodyLogin = () => {

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    function login(){
        var validate = {
            email: email,
            password: password,
        }
        axios.post('/api/user/login', validate)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)})
    }

    return(
        <Container sx={StackContainer}>
                <Box sx={StackStyle}>
                    <h2 className='mt-4'>Inicia Sesion</h2>
                </Box>
                <Box sx={StackTextField}>
                    <LoginField setEmail={setEmail}/>
                    <PasswordField setPassword={setPassword}/>
                </Box>
                <Box sx={StackStyle}>
                    <button onClick={login} className='btn btn-success'>Iniciar Sesion</button>
                </Box>
                <Box sx={stackBox}>
                    <Typography sx={{fontSize:'16px', marginRight:'10px', marginLeft: '5em'}}>No tienes cuenta?  </Typography>
                    <Link sx={stackLink} href="register" >Sign up</Link>
                </Box>
                
            </Container>
    )
}

export default BodyLogin;

const StackTextField ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

const StackStyle = {
    display:'flex',
    justifyContent:'center',
    marginBottom: '1em'
}

const StackContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
    maxWidth:{xs:'40vw', md:'100%', lg:'600px'},
    borderRadius: '25px',
    marginTop: '6em'
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
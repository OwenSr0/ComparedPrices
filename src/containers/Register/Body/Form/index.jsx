import React, { useState } from "react";
import { Box, Typography, Link, Button } from '@mui/material';
import axios from 'axios';

import EmailRegisterField from "../../../../components/TextField/Register/EmailText";
import NameRegisterField from "../../../../components/TextField/Register/NameText";
import PasswordRegisterField from "../../../../components/TextField/Register/PasswordText";
import NumberRegisterField from "../../../../components/TextField/Register/NumberText";
import {useNavigate} from 'react-router-dom';

const RegisterForm = () => {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[number, setNumber]=useState('');

    const navigate = useNavigate();

    function register(){
        var user = {
            name: name,
            email: email,
            password: password,
            number: number,
            userId: crypto.randomUUID(),
            token: crypto.randomUUID()
        }
        axios.post('/api/user/register', user)
        .then(res => {
            console.log(res.data)
            window.localStorage.setItem(
                'loggedAppUser', res.data
            )
            navigate("/home")
        })
        .then(err =>{console.log(err)})
    }

    return(
        <Box sx={StackContainer}>
            <Box>
                <Box sx={stackForm}>
                    <Typography sx={stactTittle}>Crear un nuevo usuario</Typography>
                    <NameRegisterField setName={setName}/>
                    <EmailRegisterField setEmail={setEmail}/>
                    <PasswordRegisterField setPassword={setPassword}/>
                    <NumberRegisterField setNumber={setNumber} />
                    <Button sx={stackButton} onClick={register} variant="contained" >Registrarte</Button>
                    <Box sx={stackBox}>
                        <Typography sx={{fontSize:'16px', marginRight:'10px'}}>Tienes Cuenta?</Typography>
                        <Link sx={stackLink} href="login" >Ingresa</Link>
                    </Box>
                </Box>
            </Box>
                    
        </Box>
    )
}

export default RegisterForm;

const StackContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
    minWidth:{xs:'40vw', md:'100%', lg:'500px'},
    borderRadius: '25px',
    marginLeft: '2em',
    marginRight: '2em'
}

const stackForm = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const stactTittle = {
    marginTop: '1em',
    fontSize: '25px'
}

const stackBox = {
    display: 'flex',
}

const stackLink = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '16px',
    marginBottom: '1em'
  }

const stackButton = {
    boxShadow: 'none',
    textTransform: 'none',
    width: '10em',
    height: '2.2em',
    fontSize: '20',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    marginBottom: '1em',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
}
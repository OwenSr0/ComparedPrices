import React, { useState } from "react";
import { Box } from '@mui/material';
import uniquid from 'uniqid';
import axios from 'axios';

import EmailRegisterField from "../../../../components/TextField/Register/EmailText";
import NameRegisterField from "../../../../components/TextField/Register/NameText"
import PasswordRegisterField from "../../../../components/TextField/Register/PasswordText";
import NumberRegisterField from "../../../../components/TextField/Register/NumberText";

const RegisterForm = () => {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[number, setNumber]=useState('');

    function register(){
        var user = {
            name: name,
            email: email,
            password: password,
            number: number
        }
        axios.post('/api/user/register', user)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)})
    }

    return(
        <Box sx={StackContainer}>
            <div className='row'>
                    <h2 className='mt-4'>Crear un nuevo usuario</h2>
                </div>
                <form >
                <div className='row'>
                    <div className='col-sn-6 offset-3'>
                        <NameRegisterField setName={setName}/>
                        <EmailRegisterField setEmail={setEmail}/>
                        <PasswordRegisterField setPassword={setPassword}/>
                        <NumberRegisterField setNumber={setNumber} />
                        
                        <a href="#"><button onClick={register} className='btn btn-success'>Guardar Usuario</button></a>
                    </div>
                </div>
                </form>
        </Box>
    )
}

export default RegisterForm;

const StackContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
    maxWidth:{xs:'40vw', md:'100%', lg:'600px'},
    borderRadius: '25px',
    marginTop: '2em',
    marginLeft: '2em',
    marginRight: '2em'
}
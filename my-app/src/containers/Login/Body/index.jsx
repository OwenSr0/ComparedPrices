import React, {useState} from "react";
import { Container, Box } from '@mui/material';
import axios from 'axios';




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
                <Box sx={StackStyle}>
                    <Box>
                        <Box>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </Box>
                        <Box>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <input type="text" className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </Box>
                        <Box sx={StackStyle}><button onClick={login} className='btn btn-success'>Iniciar Sesion</button></Box>
                        
                    </Box>
                </Box>
            </Container>
    )
}

export default BodyLogin;

const StackStyle = {
    display:'flex',
    justifyContent:'center',
}

const StackContainer = {
    background: '#525252',
}
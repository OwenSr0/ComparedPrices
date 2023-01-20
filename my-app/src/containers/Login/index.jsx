import React, {useState} from 'react';
import { Container } from '@mui/material';
import LoginHeader from './LoginHeader/index'
import axios from 'axios';

const Login = () => {

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
        <Container>
            <LoginHeader/>
            <Container>
                
                <div className='row'>
                    <h2 className='mt-4'>Inicia Sesion</h2>
                </div>
                <div className='row'>
                    <div className='col-sn-6 offset-3'>
                        <div className='nb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <input type="text" className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <button onClick={login} className='btn btn-success'>Iniciar Sesion</button>
                    </div>
                </div>
            </Container>
        </Container>
        
    )
}

export default Login;
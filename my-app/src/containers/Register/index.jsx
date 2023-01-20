import React, { useState } from 'react';
import { Container } from '@mui/material';
import LoginHeader from './RegisterHeader/index';
import uniquid from 'uniqid';
import axios from 'axios';

const Register = () => {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[number, setNumber]=useState('');

    function register(){
        var user = {
            name: name,
            email: email,
            password: password,
            number: number,
            idUser: uniquid()
        }
        axios.post('/api/user/register', user)
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
                    <h2 className='mt-4'>Crear un nuevo usuario</h2>
                </div>
                <div className='row'>
                    <div className='col-sn-6 offset-3'>
                        <div className='nb-3'>
                            <label htmlFor="nombre" className='form-label'>Nombre</label>
                            <input type="text" className='form-control' value={name} onChange={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <input type="text" className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="RePassword" className='form-label'>ReContraseña</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="number" className='form-label'>Numero de telefono</label>
                            <input type="text" className='form-control' value={number} onChange={(e) => {setNumber(e.target.value)}}/>
                        </div>
                        <a href="#"><button onClick={register} className='btn btn-success'>Guardar Usuario</button></a>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Register;
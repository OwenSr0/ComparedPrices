import React from 'react';
import { Container } from '@mui/material';
import LoginHeader from './LoginHeader/index'

const Login = () => {

    function login(){

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
                            <input type="text" className='form-control' />
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <input type="text" className='form-control' />
                        </div>
                        <button onClick={login} classNamebtn btn-success>Iniciar Sesion</button>
                    </div>
                </div>
            </Container>
        </Container>
        
    )
}

export default Login;
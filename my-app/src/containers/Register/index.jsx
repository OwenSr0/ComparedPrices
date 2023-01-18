import React from 'react';
import { Container } from '@mui/material';
import LoginHeader from './RegisterHeader/index'

const Register = () => {

    function register(){

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
                            <input type="text" className='form-control' />
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='nb-3'>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <input type="text" className='form-control' />
                        </div>
                        <button onClick={register} classNamebtn btn-success>Guardar Usuario</button>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Register;
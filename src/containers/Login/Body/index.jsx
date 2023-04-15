import React, { useState } from "react";
import axios from 'axios';
import LoginField from '../../../components/TextField/Login/Email/index';
import PasswordField from '../../../components/TextField/Login/Password/index';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Link, Typography } from '@mui/material';
import Turnstile from "react-turnstile";


const BodyLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [verify, setVerify] = useState('')

    async function login() {
        if (!email || !password || !verify) {
            alert('Rellena todos los campos');
            return false;
        }

        if ( !email.includes('@')){
            alert('Ingresa un email valido');
            return false;
        }

        if ( password.length < 4 || password.length > 30 || password.includes(" ")){
            alert('Ingresa una contraseña valida');
            return false;
        }

        const validate = {
            email: email,
            password: password,
            verify: verify
          };
        const res = await axios.post('https://backend.comparo.land/api/user/login', validate);
        if ( !email.includes('@')){
            alert('Ingresa un email valido');
            return false;
        }
        try {
            switch(res.status){
                case 200:
                    window.localStorage.setItem('loggedAppUser', res.data.token);
                    navigate('/home');
                    break;
                case 204:
                    alert("Comprueba que seas humano");
                    break;
                case 206:
                    alert('Correo o contraseña incorrecto')
                    break;
                default:
                    alert('Vuelve a intentarlo más tarde');
                    break;
            }
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
                    theme="dark"
                    autoResetOnExpire={true}
                    onVerify={(token) => setVerify(token)}
                    onError={(err) => console.log(err)}
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
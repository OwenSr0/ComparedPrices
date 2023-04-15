import React, { useState } from "react";
import { Box, Typography, Link, Button } from '@mui/material';
import Turnstile from "react-turnstile";
import axios from 'axios';

import EmailRegisterField from "../../../../components/TextField/Register/EmailText";
import NameRegisterField from "../../../../components/TextField/Register/NameText";
import PasswordRegisterField from "../../../../components/TextField/Register/PasswordText";
import NumberRegisterField from "../../../../components/TextField/Register/NumberText";
import {useNavigate} from 'react-router-dom';

const RegisterForm = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [number, setNumber]=useState('');
    const [verify, setVerify] = useState('')

    const navigate = useNavigate();

    async function register() {
        console.log(verify)
        if (!name || !email || !password || !verify) {
            alert('Rellena todos los campos');
            return false;
        }
        if ( name.length < 4 || name.length > 30){
            alert('Nombre invalido, muy corto o muy largo');
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
          
        var user = {
            name: name,
            email: email,
            password: password,
            number: number,
            verify: verify
        };
          
        try {
            const res = await axios.post('https://backend.comparo.land/api/user/register', user);
            switch(res.status) {
                case 200:
                    window.localStorage.setItem('loggedAppUser', res.data);
                    navigate("/home");
                    break;
                case 204:
                    alert('Verifica que seas humano');
                    break;
                case 206:
                    alert('Usuario ya utilizado')
                    break;
                case 208:
                    alert('Error vuelve a intentarlo mas tarde');
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Box sx={StackContainer}>
                <Box sx={stackForm}>
                    <Typography sx={stactTittle}>Crear un nuevo usuario</Typography>
                    <Box sx={stackBox}>
                        <NameRegisterField setName={setName} register={register}/>
                        <EmailRegisterField setEmail={setEmail} register={register}/>
                        <PasswordRegisterField setPassword={setPassword} register={register}/>
                        <NumberRegisterField setNumber={setNumber} register={register}/>
                    </Box>
                    <Turnstile
                    className="cf-turnstile"
                    sitekey="0x4AAAAAAAD2hnSRwvyh4g00"
                    theme="dark"
                    autoResetOnExpire={true}
                    onVerify={(token) => setVerify(token)}
                    onError={(err) => console.log(err)}
                    />
                    <Box>
                        <Button sx={stackButton} onClick={register} variant="contained" >Registrarte</Button>
                        <Box sx={stackBox1}>
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
    width:{
        xs:'85%',
        sm: '60%',
        md:'60%',
        lg:'19em',
        xl:'18em'},
    borderRadius: '25px',
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: {
        sm: '1em',
        xl: '0'
    }
}

const stackForm = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: {
        xs: 'space-around',
    },
    height: {
        xs: '15em',
        sm: '11em'
    }
}

const stactTittle = {
    margin: {
        xs: '0.5em 1em 0 1em',
        sm: '1em 0 0 0'
    },
    fontSize: {
        xs: '1.7em',
        sm: '1.2em',
        lg: '1.3em',
        xl: '1.2em'
    },
    textAlign: 'center'
}

const stackBox1 = {
    display: 'flex',
}

const stackLink = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '16px',
    marginBottom: '1.05em'
  }

const stackButton = {
    boxShadow: 'none',
    textTransform: 'none',
    width: {
        xs: '8em',
        sm: '10em'
    },
    height: '2.2em',
    fontSize: '20',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    marginBottom: {xs: '0.5em',sm: '1em'},
    marginTop: {xs: '0.5em', sm: '0'},
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
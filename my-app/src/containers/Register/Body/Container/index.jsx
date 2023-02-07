import React from "react";
import { Container, Typography, Box } from '@mui/material';

const RegisterHub = () => {
    return(
        <Box sx={StackContainer}>
            <img src="./img/easy-to-use.png" alt="Click" width="80" height="80" />
            <Box><Typography sx={stackText}>Comienza con pocos clicks</Typography></Box>
            <img src="./img/user.png" alt="User" width="80" height="80" />
            <Box><Typography sx={stackText}>Registrate gratis y comienza a rastrear tus productos</Typography></Box>
            <img src="./img/padlock.png" alt="User" width="80" height="80" />
            <Box><Typography sx={stackText}>Conviertete en usuario y desbloquea beneficios</Typography></Box>
        </Box>
    )
}

export default RegisterHub;

const StackContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:{xs:'40vw', md:'100%', lg:'500px'},
    borderRadius: '25px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '2em',
    marginRight: '2em'
}

const stackText = {
    textAlign: 'center',
}
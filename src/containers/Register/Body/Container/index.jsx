import React from "react";
import { Typography, Box } from '@mui/material';

const RegisterHub = () => {
    return(
        <Box sx={StackContainer}>
            <Box sx={stackBox}>
                <img src="./img/easy-to-use.png" alt="Click" width="80" height="80" />
                <Box><Typography sx={stackText}>Comienza con pocos clicks</Typography></Box>
            </Box>
            <img src="./img/user.png" alt="User" width="80" height="80" />
            <Box><Typography sx={stackText}>Registrate gratis y comienza a rastrear tus productos</Typography></Box>
            <Box sx={stackBox}>
                <img src="./img/padlock.png" alt="User" width="80" height="80" />
                <Box><Typography sx={stackText}>Conviertete en usuario y desbloquea beneficios</Typography></Box>
            </Box>
        </Box>
    )
}

export default RegisterHub;

const StackContainer = {
    display: {
        xs: 'none',
        sm:'flex'
    },
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:{xs:'40vw', md:'100%', lg:'500px'},
    borderRadius: '25px',
    marginLeft: '2em',
    marginRight: '2em',
    boxShadow: 'rgba(F, F, F, F, F) 0px 5px 15px'
}

const stackText = {
    textAlign: 'center',
    margin: '0.5em 0 0.5em 0'
}

const stackBox = {
    display: {
        sm: 'none',
        md:  'flex'
    },
    flexDirection: {
        md: 'column'
    },
    alignItems: {
        md: 'center'
    }
}
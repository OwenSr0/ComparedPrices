import React from "react";
import { Container, Typography } from '@mui/material';

const RegisterHub = () => {
    return(
        <Container sx={StackContainer}>
            <Typography></Typography>
            <Typography></Typography>
            <Typography></Typography>
            <Typography></Typography>
        </Container>
    )
}

export default RegisterHub;

const StackContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#242526',
    maxWidth:{xs:'40vw', md:'100%', lg:'600px'},
    borderRadius: '25px',
    marginTop: '2em'
}
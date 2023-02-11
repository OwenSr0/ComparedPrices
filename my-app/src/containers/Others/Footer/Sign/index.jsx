import React from "react";
import { Container, Typography, Link } from '@mui/material';

const SignFooter = () => {
    return(
        <Container sx={stackStyle}>
            <Typography sx={stackText1}>OwenB © 2023</Typography>
            <Link sx={stackText2}>Terminos y condiciones</Link>
        </Container>
    )
}

export default SignFooter;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const stackText1 = {
    fontSize: '16px',
    marginRight: '1em',
    marginLeft: '4em'
}

const stackText2 = {
    fontSize: '18px',
    marginBottom: '3px'
}
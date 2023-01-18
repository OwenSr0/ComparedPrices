import React from "react";
import { Container, Button   } from '@mui/material';

const stackStyle = {
    width: '6em',
    marginLeft: '0',
    marginRight: '0'
  }

  const SignIn = () => {
    return(
        <Container sx={stackStyle}>
            <Button variant="outlined"><a href="login">Sign in</a></Button>
        </Container>
    )
  }

export default SignIn;
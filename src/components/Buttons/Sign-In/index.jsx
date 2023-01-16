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
            <Button variant="outlined">Sign In</Button>
        </Container>
    )
  }

export default SignIn;
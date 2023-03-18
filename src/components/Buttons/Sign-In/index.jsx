import React from "react";
import { Box, Button} from '@mui/material';

  const SignIn = () => {
    return(
        <Box sx={stactStyle}>
            <Button href="login" sx={stackButton}>Ingresa</Button>
        </Box>
    )
  }

export default SignIn;

const stactStyle = {
  display: 'flex',
  justifyContent: 'center',
  gridColumnStart: '7',
  margin: 'auto 0 auto 0'
}

const stackButton = {
  padding: '4px 15px 4px 15px',
  borderRadius: '1em',
  boxShadow: ' 0 0 3px white',
  color: 'white',
    '&:hover': {
    backgroundColor: '#303030',
  },
}
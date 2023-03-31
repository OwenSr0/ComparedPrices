import React from "react";
import { Box, Button} from '@mui/material';

  const SignIn = () => {
    return(
        <Box sx={stactStyle}>
            <Button href="/login" sx={stackButton}>Ingresa</Button>
        </Box>
    )
  }

export default SignIn;

const stactStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto 0 auto 0'
}

const stackButton = {
  widht: {
    xs: "1em",
    sm: "100%",
    lg: 'auto'
  },
  height: {
    xs: "2.5em",
    sm: '3em',
    lg: 'auto'
  },
  padding:{
    xs: '8px 15px 8px 15px',
    sm: "'4px 15px 4px 15px'",
  } ,
  borderRadius: '1em',
  border: {
    xs: '2px solid white',
    lg: '1px solid white'
  },
  boxShadow: {
    lg: ' 0 0 3px white'
  },
  color: 'white',
    '&:hover': {
    backgroundColor: '#303030',
  },
  fontSize:{
    xs: "18px",
    sm: "18px",
    xl: '22px'
  },
  marginTop: {
    xs: '10px',
    lg: '0'
  }
  
}
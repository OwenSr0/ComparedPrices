import React from "react";
import { Box, Button } from '@mui/material';



  const Home = () => {
    return(
        <Box sx={stackStyle}>
            <Button href="home" sx={stackButton}>Inicio</Button>
        </Box>
    )
  }

export default Home;

const stackStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '6em',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0.5em',
  marginBottom: '0.5em',
  gridColumn: '2/3',
  gridRow: '1/2',
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
    sm: "22px",
    md: '22px'
  },
  marginTop: {
    xs: '10px',
    lg: '0'
  }
  
}
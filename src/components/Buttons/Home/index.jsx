import React from "react";
import { Box, Button } from '@mui/material';



  const Home = () => {
    return(
        <Box sx={stackStyle}>
            <Button href="home" sx={stackButton}>Home</Button>
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
  padding: '4px 15px 4px 15px',
  borderRadius: '1em',
  boxShadow: ' 0 0 3px white',
  color: 'white',
    '&:hover': {
    backgroundColor: '#303030',
  },
}
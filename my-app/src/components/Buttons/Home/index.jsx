import React from "react";
import { Container, Button } from '@mui/material';

const stackStyle = {
    width: '6em',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0.5em',
    marginBottom: '0.5em',
  }

  const Home = () => {
    return(
        <Container sx={stackStyle}>
            <Button href="home" variant="contained">Home</Button>
        </Container>
    )
  }

export default Home;
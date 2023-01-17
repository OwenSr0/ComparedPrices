import React from "react";
import logo from "../../img/logo.png"
import { Container } from '@mui/material';
import TextFields from "../../components/TextField";
import SignIn from "../../components/Buttons/Sign-In";

const stackHeader = {
  display: 'flex',
  justifyContent: 'space-between'
}

const stackImg = {
  height: '1em',
  width: '1em'
}


  const Headerr = () => {
    return(
        <Container sx={stackHeader}>
          <img id='logo' src={logo} className="App-logo" alt="logo" />
          <TextFields></TextFields>
          <SignIn></SignIn>
        </Container>
    )
  }

export default Headerr;
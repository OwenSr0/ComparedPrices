import React from "react";
import { Container } from '@mui/material';
import SignIn from '../../../components/Buttons/Sign-In/index';

const stackHeader = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const HomeHeader = () => {
    return(
        <Container sx={stackHeader}>
            <img src="" alt="" />
            <SignIn/>
        </Container>
    )
}

export default HomeHeader;
import React from "react";
import { Container } from '@mui/material';
import TextFields from '../../../components/TextField/index'
import SignIn from '../../../components/Buttons/Sign-In/index'

const stackHeader = {
  display: 'flex',
}

const HomeHeader = () => {
    return(
        <Container sx={stackHeader}>
            <img src="" alt="" />
            <TextFields/>
            <SignIn/>
        </Container>
    )
}

export default HomeHeader;
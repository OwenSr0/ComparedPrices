import React, {useState, useEffect} from "react";
import { Box, Typography } from '@mui/material';
import Home from './../../../components/Buttons/Home';
import UserIcon from '../../../components/Header/User/index';
import SignIn from '../../../components/Buttons/Sign-In/index';
import '../../../App.css';
const AboutHeader = () =>{

    const[user, setUser]=useState('');

    useEffect(() => {
        const loggedUserToken = window.localStorage.getItem('loggedAppUser')
        if(loggedUserToken){
            setUser(loggedUserToken)
        }
    }, [])
    if(user){
        document.getElementById('userProfileOn').style.display = "block";
        document.getElementById('userProfileOff').style.display = "none";
    }

    return(
        <Box sx={stackStyle}>
            <Home />
            <Box sx={stackT}><Typography sx={stackText}>Acerca de Comparo</Typography></Box>
            <Box sx={stackConditionals}>
                <Box  id='userProfileOn'><UserIcon/></Box>
                <Box  id='userProfileOff'><SignIn/></Box>
            </Box>
        </Box>
    )
}

export default AboutHeader;

const stackStyle = {
    position: 'relative',
    display: 'grid',
    width: '100%',
    gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '3em',
    zIndex: '1'
}

const stackT = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '4/6',
    gridRow: '1/2',
}

const stackText = {
    fontSize: '1.5em',
}

const stackConditionals = {
    gridColumnStart: '7',
    margin: 'auto 0 auto 0'
}

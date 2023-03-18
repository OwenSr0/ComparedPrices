import React, {useState, useEffect} from "react";
import { Box } from '@mui/material'; 
import UserIcon from './User/index'
import SignIn from '../Buttons/Sign-In/index'
import Logo from '../Other/Logo/index'
import '../../App.css';
const DefaultHeader = () =>{

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
            <Logo/>
            <Box sx={stackConditionals} id='userProfileOn'><UserIcon/></Box>
            <Box sx={stackConditionals} id='userProfileOff'><SignIn/></Box>
            
        </Box>
    )
}

export default DefaultHeader;

const stackStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '3em',
}

const stackConditionals = {
    gridColumnStart: '7',
    margin: 'auto 0 auto 0'
}

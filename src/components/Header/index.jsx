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
            <Box sx={stackConditionals}><Logo/></Box>
            <Box sx={stackConditionals} id='userProfileOn'><UserIcon/></Box>
            <Box sx={stackConditionals} id='userProfileOff'><SignIn/></Box>
            
        </Box>
    )
}

export default DefaultHeader;

const stackStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: {
        xs: "auto",
        sm: "auto",
        lg: '3em'
    },
    marginTop: {
        sm: '5px',
        lg: '0'
    }
}

const stackConditionals = {
    margin: {
        xs: "auto 1.5em",
        md: 'auto 3em',
        lg: 'auto 4em ',
        xl: ' auto 7em '
    } 
}

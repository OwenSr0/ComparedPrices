import React, {useState, useEffect} from "react";
import { Box } from '@mui/material'; 
import UserIcon from './User/index'
import SignIn from '../Buttons/Sign-In/index'
import Logo from '../Other/Logo/index'
import '../../App.css';
const DefaultHeader = (props) =>{
    const region = props.region;
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
            <Box sx={stackBox1}><Logo region={region}/></Box>
            <Box sx={stackBox2} id='userProfileOn'><UserIcon region={region}/></Box>
            <Box sx={stackBox2} id='userProfileOff'><SignIn region={region}/></Box>
        </Box>
    )
}

export default DefaultHeader;

const stackStyle = {
    display: 'grid',
    gridTemplateColumns: {
        xs: '10% auto 26% auto 10%',
        lg: '10% auto 50% auto 10%'
    },
    gridTmeplateRows: {
        xs: '3em'
    },
    width: '100%',
    height: {
        xs: "auto",
        sm: "auto",
        lg: '3em'
    },
    paddingTop: {
        xs: '1em',
        lg: '0'
    },
}

const stackBox1 = {
    gridColumnStart: '2',
    margin: ' auto 0 auto 0'
}

const stackBox2 = {
    gridColumnStart: '4',
    margin: {
        xs: 'auto 0 auto 0'
    }   
}

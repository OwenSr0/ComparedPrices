import React, {useState, useEffect} from "react";
import { Box, Typography } from '@mui/material'; 
import UserIcon from './User/index'
import SignIn from '../../../components/Buttons/Sign-In/index'
import '../../../App.css';
const ComparoHeader = () =>{

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
           
            <Box sx={stactBox}>
                <a href="home"><img alt="Logo"  width="50" height="50" /></a>
            </Box>
            <Box sx={stackT}><Typography sx={stackText}>Product</Typography></Box>
            <Box sx={stackConditionals}>
                <Box  id='userProfileOn'><UserIcon/></Box>
                <Box  id='userProfileOff'><SignIn/></Box>
            </Box>
            
            
        </Box>
    )
}

export default ComparoHeader;

const stackStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '3em',
}

const stactBox = {
    gridColumnStart: '2',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',

}

const stackT = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '4/6',
    gridRow: '1/2',
}

const stackText = {
    fontSize: '2em',
}

const stackConditionals = {
    gridColumnStart: '7',
    margin: 'auto 0 auto 0'
}

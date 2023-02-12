import React, {useState, useEffect} from "react";
import { Box } from '@mui/material'; 
import UserIcon from './User/index'
import SignIn from '../../../components/Buttons/Sign-In/index'
import '../../../App.css';
const HomeHeader = () =>{

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
            <Box sx={StactBox}>
                <a href="home"><img src="./img/logo.png" alt="Logo"  width="50" height="50" /></a>
            </Box>

            <Box sx={stackConditionals} id='userProfileOn'><UserIcon/></Box>
            <Box sx={stackConditionals} id='userProfileOff'><SignIn/></Box>
            
        </Box>
    )
}

export default HomeHeader;

const stackStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '3em',
}

const StactBox = {
    gridColumnStart: '2',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.2em',
    marginBottom: '0.2em',

}

const stackConditionals = {
    gridColumnStart: '7',
    margin: 'auto 0 auto 0'
}

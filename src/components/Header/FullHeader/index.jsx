import React, {useState, useEffect} from "react";
import { Box, Typography } from '@mui/material'; 
import Logo from '../../Other/Logo/index'
import UserIcon from '../User/index'
import SignIn from '../../Buttons/Sign-In/index'
import '../../../App.css';

const FullHeader = (props) =>{

    const {
        title = props.title,
        link = props.link,
        region = props.region,
    } = props

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
            <Box sx={{gridColumnStart: '2', margin: 'auto 0 auto 0'}}><Logo region={region}/></Box>
            { link !== undefined ? (
                    <Box sx={stackT}><a style={{color: 'white'}} href={link}><Typography sx={stackText}>{title}</Typography></a></Box>
            ) : (
                <Box sx={stackT}><Typography sx={stackText}>{title}</Typography></Box>
            )}
            <Box sx={stackConditionals}>
                <Box  id='userProfileOn'><UserIcon region={region}/></Box>
                <Box  id='userProfileOff'><SignIn region={region}/></Box>
            </Box>
            
            
        </Box>
    )
}

export default FullHeader;

const stackStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: {
        xs: '5% auto 14% auto 5%',
        sm: '5% auto 38% auto 5%',
        lg: '10% auto 50% auto 10%'
    },
    gridTemplateRows: '3em',
    height: {
        xs: "auto",
        sm: "auto",
        lg: '3em'
    },
    
    paddingTop: {
        xs: '1em',
        sm: '1.5em',
        lg: '0'
    },
    zIndex: '1'
}

const stackT = {
    display: {
        xs: 'none',
        sm: 'flex'
    },
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '3/4',
    gridRow: '1/2',
}

const stackText = {
    textAlign: 'center',
    fontSize: {
        sm: '2.2em',
        xl: '2em'
    }
}

const stackConditionals = {
    gridColumnStart: '4',
    margin: 'auto 0 auto 0'
}

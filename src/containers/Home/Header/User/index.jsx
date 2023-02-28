import React, { useState} from "react";
import { Box, Button } from '@mui/material';
import UserMenu from './Menu/index'
import '../../../../App.css';

const UserIcon = () => {
    const[open, setOpen]=useState(false);
    
    function showMenu(){
        if(open){
            document.getElementById('userIcon').style.display = "none";
            setOpen(false)
        }
        else{
            document.getElementById('userIcon').style.display = "flex";
            setOpen(true)
        }
    }

    return(
        <Box sx={stactBox}>
            <Button sx={stackButton} onClick={showMenu} >
                <img src="./img/profile-user.png" alt="user-profile" width="50" height="50" />
            </Button>
            <Box id='userIcon'><UserMenu /></Box>
        </Box>
    )
}

export default UserIcon;

const stactBox = {
    display: 'flex',
    justifyContent: 'center',
}

const stackButton = {
    margin: 'auto 0 auto 0',
    width: '2.5em',
    height: '2.5em',
}

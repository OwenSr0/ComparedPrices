import React from "react";
import { Box, Link } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const UserMenu = () => {

    const navigate = useNavigate();


    function logoutB(){
        navigate("/sign-out")
    }
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Link sx={stackLink} href="#">Profile</Link>
                <Link sx={stackLinks} href="#">Setups</Link>
                <Link sx={stackLink} onClick={logoutB}>Sign Out</Link>
            </Box>
            
        </Box>
    )
}

export default UserMenu;

const stackStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '1.5em 1.5em 1.5em 1.5em',
    position: 'absolute',
    left: '0px',
    marginTop: '3em'
}

const stackBox = {
    background: '#242526',
    borderRadius: '25px',
    gridColumn: '7/8',
    gridRow: '1/4',
}

const stackLink = {
    display: 'flex',
    justifyContent: 'center',
}

const stackLinks = {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray'
}
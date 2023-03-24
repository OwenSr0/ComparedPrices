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
                <Link sx={stackLink} href="#">Perfíl</Link>
                <Link sx={stackLinks} href="#">Configuración</Link>
                <Link sx={stackLink} onClick={logoutB}>Cerrar Sesión</Link>
            </Box>
            
        </Box>
    )
}

export default UserMenu;

const stackStyle = {
    position: 'absolute',
    gridColumnStart: '4',
    display: 'grid',
    width: '100%',
    gridTemplateColumns: {
        xs: ' 55% auto 5%',
        sm: ' 70% auto 5%',
        lg: ' 75% auto 10%'
    },
    gridTemplateRows: '1.6em 1.6em 1.6em 1.6em',
    left: '0px',
    marginTop: {
        xs: '3em',
        sm: '2.4em',
        xl: '2em'
    },
    zIndex: '1'
}

const stackBox = {
    background: '#242526',
    borderRadius: '25px',
    gridColumn: {
        xs: '2/3'
    },
    gridRow: '1/4',
    boxShadow: ' 0 0 4px black',
    margin: {
        lg: '0 auto 0 auto',
        xl: '0 auto 0 auto'
    }
}

const stackLink = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 20px 0 20px'
}

const stackLinks = {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
    margin: '0 10px 0 10px'
}
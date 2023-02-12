import React from "react";
import {Box, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    setTimeout(logout, 5000);
    function logout() {
        window.localStorage.removeItem('loggedAppUser')
        navigate("/home")
    }
    return(
        <Box>
            <Typography>
                Cerrando sesion
            </Typography>
        </Box>
    )
}

export default Logout;
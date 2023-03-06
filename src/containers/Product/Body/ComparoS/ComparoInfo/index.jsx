import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoInfo = () => {
    /* agregar una funcion que ejecute imprimir typo cada variable del objeto */
    return(
        <Box sx={stackStyle}>
            <Typography>Details</Typography>
            <Typography>new</Typography>
            <Typography>super</Typography>
            <Typography>nintendos</Typography>
            <Typography>uwu</Typography>
        </Box>
    )
}

export default ComparoInfo;

const stackStyle = {
    background: '#242526',
    display: 'flex',
    witdh: '20em',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    margin: '1em',
    padding: '1em'
}
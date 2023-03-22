import React from "react";
import { Box } from '@mui/material';
import './index.css'

const AutorImg = () => {
    return(
        <Box sx={stackStyle}>
            <img src="./img/autor.png" alt="autor" width='350px'  id="imgAutor"/>
        </Box>
    )
}

export default AutorImg;

const stackStyle = {
    borderRadius: '10px',
    order: {
        sm: '-1',
        lg: '0'
    },
    margin: {
        sm: '1em 5em 1em 5em',
        lg: '1em'
    }
}
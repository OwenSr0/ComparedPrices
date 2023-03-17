import React from "react";
import { Box } from '@mui/material';

const AutorImg = () => {
    return(
        <Box sx={stackStyle}>
            <img src="./img/autor.png" alt="autor" style={stackImg}/>
        </Box>
    )
}

export default AutorImg;

const stackStyle = {
    margin: '1em',
    borderRadius: '10px'
}

const stackImg = {
    width: '350px',
    height: '350px',
    borderRadius: '1em',
}
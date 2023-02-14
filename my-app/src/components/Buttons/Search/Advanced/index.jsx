import React from "react";
import { Box, Button } from '@mui/material';

const AdvancedOptionsB = () => {

    function AdvancedOptions(){
        alert('En desarrollo')
    }

    return(
        <Box>
            <Button sx={stackButton} onClick={AdvancedOptions} variant="contained" >Opciones Avanzadas</Button>
        </Box>
    )
}

export default AdvancedOptionsB;

const stackButton = {
    boxShadow: 'none',
    textTransform: 'none',
    width: '10em',
    height: '3em',
    fontSize: '20',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
}
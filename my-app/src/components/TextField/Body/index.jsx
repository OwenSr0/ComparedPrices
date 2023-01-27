import React from "react";
import { TextField, Box  } from '@mui/material';

const stackStyle = {
  width: '20em',
  marginLeft: '0',
  marginRight: '0',
  borderColor: "orange"
}

const stackText = {
  width: '20em',
  background: 'white',
  borderRadius: '4px'
}


  const TextFieldBody = () => {
    return(
        <Box sx={stackStyle}>
            <TextField sx={stackText} placeholder='Buscar' color="success" label="Buscar">Buscar</TextField>
        </Box>
    )
  }

export default TextFieldBody;
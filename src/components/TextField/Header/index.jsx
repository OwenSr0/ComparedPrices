import React from "react";
import { Container, TextField  } from '@mui/material';

const stackStyle = {
  width: '10em',
  marginLeft: '0',
  marginRight: '0',
  borderColor: "orange"
}

const stackText = {
  background: 'white',
  borderRadius: '4px'
}


  const TextFields = () => {
    return(
        <Container sx={stackStyle}>
            <TextField sx={stackText} placeholder='Buscar' color="success" label="Buscar">Buscar</TextField>
        </Container>
    )
  }

export default TextFields;
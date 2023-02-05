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
  borderRadius: '10px'
}

/* Realizar un div que muestre info de que ingresar en el textfield */
  const TextFieldBody = () => {
    return(
        <Box sx={stackStyle}>
          <div />
            <TextField sx={stackText} placeholder='Buscar' InputProps={{ style: { fontSize: 18 } }}>Buscar
              <icon></icon>
            </TextField>
        </Box>
    )
  }

export default TextFieldBody;
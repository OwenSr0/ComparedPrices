import React from "react";
import { TextField, Box, Button  } from '@mui/material';





/* Realizar un div que muestre info de que ingresar en el textfield */
  const TextFieldBody = () => {

    function search(){
      console.log('uwu')
    }

    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='Buscar' InputProps={{ style: { fontSize: 18 } }}>Buscar</TextField>
          </Box>
          <Box sx={stackBox0}>
            <Button sx={stackImg} onClick={search}><img src="./img/searching-glass.png" alt="len" width='25px' height='25px'/></Button>
          </Box>
        </Box>
    )
  }

export default TextFieldBody;

const stackStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3em'
}

const stackBox = {
  display: 'grid',
  width: '20em',
  gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
  gridTemplateRows: 'auto',
}

const stackBox0 = {
  position: 'absolute',
  display: 'grid',
  width: '20em',
  height: '2em',
  gridTemplateColumns: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
  gridTemplateRows: 'auto',
}

const stackText = {
  width: '20em',
  height: 'auto',
  background: 'white',
  borderRadius: '10px',
  gridColumn: '1/8',
  gridRow: '1/2'
}

const stackImg = {
  position: 'absolute',
  gridColumn: '8/9',
  gridRow: '1/2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:'100%',
  height: '100%',
}
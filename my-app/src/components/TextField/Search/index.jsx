import React from "react";
import { TextField, Box, Button  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';




/* Realizar un div que muestre info de que ingresar en el textfield */
  const SearchTextField = () => {

    function search(){
      console.log('uwu')
    }

    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='keyword, manufacturer, or Amazon URL' InputProps={{ style: { fontSize: 18 } }}>Buscar</TextField>
          </Box>
          <Box sx={stackBox0}>
            <Button sx={stackImg} onClick={search}><SearchIcon color="action" alt="len" width='25px' height='25px'/></Button>
          </Box>
        </Box>
    )
  }

export default SearchTextField;

const stackStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1em'
}

const stackBox = {
  display: 'grid',
  width: '40em',
  gridTemplateColumns: ' repeat(10, 10%) ',
  gridTemplateRows: 'auto',
}

const stackBox0 = {
  position: 'absolute',
  display: 'grid',
  width: '40em',
  height: '2em',
  gridTemplateColumns: ' repeat(10, 10%) ',
  gridTemplateRows: 'auto',
}

const stackText = {
  width: '40em',
  height: 'auto',
  background: 'white',
  borderRadius: '10px',
  gridColumn: '1/8',
  gridRow: '1/2'
}

const stackImg = {
  position: 'absolute',
  gridColumn: '10/11',
  gridRow: '1/2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:'100%',
  height: '100%',
}
import React, {useState} from "react";
import { TextField, Box, Button  } from '@mui/material';
import { Link } from 'react-router-dom';

/* Realizar un div que muestre info de que ingresar en el textfield */
  const TextFieldBody = () => {

    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      setQuery(event.target.value);
    }

    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='Buscar' InputProps={{ style: { fontSize: 18 } } } type="text" value={query} onChange={handleChange}>Buscar</TextField>

            <Link to={`/search?q=${query}`}><Button sx={stackImg}><img src="./img/searching-glass.png" alt="len" width='25px' height='25px'/></Button></Link>
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

const stackText = {
  width: '20em',
  height: 'auto',
  background: 'white',
  borderRadius: '10px',
  gridColumn: '1/8',
  gridRow: '1/2'
}

const stackImg = {
  gridColumn: '8/9',
  gridRow: '1/2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:'100%',
  height: '100%',
}
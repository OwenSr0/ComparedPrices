import React, {useState} from "react";
import { TextField, Box, Button, Link  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


/* Realizar un div que muestre info de que ingresar en el textfield */
  const TextFieldBody = () => {

    const [stackLink, setStackLink] = useState({pointerEvents: 'none'});
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      setQuery(event.target.value);
      if(event.target.value.length > 2){setStackLink({pointerEvents: 'auto',})}else{setStackLink({pointerEvents: 'none',})};
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter'&& event.target.value.length > 2) {
        window.location.assign(`/search?q=${query}`);
      }
    }
    
    const handleClick = () => {
      if(query.length > 2){
      window.location.href = `/search?q=${query}`;
      }
    }
    //el div sin nada espera una caja de info que algun dia agregare
    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='Buscar productos, marcas, urls y más…' InputProps={{ style: { fontSize: 18 } } } type="text" value={query} onChange={handleChange} onKeyDown={handleKeyDown}>Buscar</TextField>

            <Link sx={stackLink}><Button sx={stackImg} onClick={handleClick}><SearchIcon color="action" alt="len" width='25px' height='25px'/></Button></Link>
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
    '&:hover': {
      background: '#cccccc',
      cursor: 'pointer',
      borderRadius: '8px',
    },
}
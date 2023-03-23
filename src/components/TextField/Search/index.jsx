import React, {useState} from "react";
import { TextField, Box, Button, Link  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';


  const SearchTextField = () => {

    const location = useLocation();
    const lastQuery = new URLSearchParams(location.search);
    const search = lastQuery.get('q');

    const [query, setQuery] = useState('');
    const [boolean, setBoolean] = useState(true);
    const [stackLink, setStackLink] = useState({pointerEvents: 'none'});

    if (boolean){
      setQuery(search)
      setBoolean(false)
    }


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
                  
    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='Buscar productos, marcas, urls y más…' InputProps={{ style: { fontSize: 18 }}} value={query} onChange={handleChange} onKeyDown={handleKeyDown}>Buscar</TextField>
            <Link  sx={stackLink}><Button sx={stackImg} onClick={handleClick}><SearchIcon color="action" alt="len" width='25px' height='25px'/></Button></Link>
          </Box>
        </Box>
    )
  }

export default SearchTextField;

const stackStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: {
    sm: '1em 0 0.5em 0',
    lg: '1em 0 0.5em 0'
  }
}

const stackBox = {
  display: 'grid',
  width: {
    xs: '14.5em',
    sm: '25em',
    lg: '40em'
  },
  gridTemplateColumns: ' repeat(10, 10%) ',
  gridTemplateRows: 'auto',
}

const stackText = {
  width: {
    xs: '16em',
    sm: '25em',
    lg: '40em'
  },
  height: 'auto',
  background: 'white',
  borderRadius: '10px',
  gridColumn: '1/10',
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
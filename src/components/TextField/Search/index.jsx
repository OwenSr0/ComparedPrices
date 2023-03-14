import React, {useState} from "react";
import { TextField, Box, Button  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';


  const SearchTextField = () => {

    const location = useLocation();
    const lastQuery = new URLSearchParams(location.search);
    const search = lastQuery.get('q');

    const [query, setQuery] = useState('first');
    const [boolean, setBoolean] = useState(true);
    const [stackLink, setStackLink] = useState({pointerEvents: 'none'});

    if (boolean){
      setQuery(search)
      setBoolean(false)
    }


    const handleChange = (event) => {
      setQuery(event.target.value);
      if(query){
        setStackLink({
          pointerEvents: 'auto',
        })
      }
    }
    const handleClick = () => {
      window.location.assign(`/search?q=${query}`);
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        window.location.assign(`/search?q=${query}`);
      }
    }
                  
    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='keyword, manufacturer, or Amazon URL' InputProps={{ style: { fontSize: 18 }}} value={query} onChange={handleChange} onKeyDown={handleKeyDown}>Buscar</TextField>
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
  marginTop: '1em'
}

const stackBox = {
  display: 'grid',
  width: '40em',
  gridTemplateColumns: ' repeat(10, 10%) ',
  gridTemplateRows: 'auto',
}

const stackText = {
  width: '40em',
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
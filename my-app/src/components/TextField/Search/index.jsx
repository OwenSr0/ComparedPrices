import React, {useState} from "react";
import { TextField, Box, Button  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';


  const SearchTextField = () => {

    const [query, setQuery] = useState('');
    const [stackLink, setStackLink] = useState({pointerEvents: 'none'});

    const handleChange = (event) => {
      setQuery(event.target.value);
      if(!query){
        setStackLink({
          pointerEvents: 'auto',
        })
      }
    }
    const handleClick = (e) => {
      console.log()
      window.location.assign(`/search?q=${query}`);
    }


    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='keyword, manufacturer, or Amazon URL' InputProps={{ style: { fontSize: 18 }}} onChange={handleChange}>Buscar</TextField>
            <Link to={`/search?q=${query}`} sx={stackLink}><Button sx={stackImg} onClick={handleClick}><SearchIcon color="action" alt="len" width='25px' height='25px'/></Button></Link>
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
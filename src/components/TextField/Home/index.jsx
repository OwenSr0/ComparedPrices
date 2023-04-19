import React, {useState} from "react";
import { TextField, Box, Button, Link  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


/* Realizar un div que muestre info de que ingresar en el textfield */
  const TextFieldBody = (props) => {
    const region = props.region;

    const [stackLink, setStackLink] = useState({pointerEvents: 'none'});
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      setQuery(event.target.value);
      if(event.target.value.length > 2){setStackLink({pointerEvents: 'auto',})}else{setStackLink({pointerEvents: 'none',})};
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && event.target.value.length > 2) {
        window.location.assign(`/${region}/search?q=${query}`);
      }
    }
    
    const handleClick = () => {
      if(query.length > 2){
      window.location.href = `/${region}/search?q=${query}`;
      }
    }
    //el div sin nada espera una caja de info que algun dia agregare
    return(
        <Box sx={stackStyle}>
          <div></div>
          <Box sx={stackBox}>
            <TextField sx={stackText} placeholder='Buscar productos, marcas, urls y más…' InputProps={{ style: { fontSize: 16} } } type="text" value={query} onChange={handleChange} onKeyDown={handleKeyDown}>Buscar</TextField>
            <Link sx={stackLink}><Button sx={stackImg} onClick={handleClick}><SearchIcon color="action" alt="len" sx={stackIcon}/></Button></Link>
          </Box>
        </Box>
    )
  }

export default TextFieldBody;

const stackStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: {
    xs: "2em",
    md: '3em',
    lg: '2em',
    xl: '3em'
  }
}

const stackBox = {
  display: 'grid',
  width: {
    xs: '18em',
    sm: '20em'
  },
  gridTemplateColumns: {
    xs: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
    sm: ' 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% '
  },
  gridTemplateRows: 'auto',
  border: {
    xs: '2px solid white',
    lg: '0'
  },
  borderRadius: '10px'
}

const stackText = {
  width: {
    xs: '17.75em',
    sm: '20em'
  },
  paddingRight: {
    xs: '3em',
    sm: '2.5em'
  },
  height: 'auto',
  background: 'white',
  borderRadius: '10px',
  gridColumn: {
    xs: '1/9',
    sm: '1/8'
  },
  gridRow: '1/2',
}

const stackImg = {
  gridColumn: {
    xs: '9/11',
    sm: '8/9'
  },
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
  paddingLeft: {
    xs: '15px',
    sm: "0"
  }
}

const stackIcon = {
  width: {
    xs: "1em",
    sm: "1em",
    lg: '1em',
    xl: '1em'
  },
  height: {
    xs: "1em",
    sm: "1em",
    lg: '1em',
    xl: '1em'
  }
}
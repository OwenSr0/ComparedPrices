import React from "react";
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';




  const LoginField = (props) => {

    const {
      setEmail,
      login
    } = props;

    const handleKeyDown = (event) => {
      if (event.key === 'Enter'&& event.target.value.length > 2) {
        login()
      }
    }



    return(
      <Box sx={stackStyle}>
        <FormControl sx={stackForm} variant="filled">
            <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Correo Electronico</InputLabel>
            <FilledInput style={{ fontSize: '18px', height: '3em'}}
              onChange={(e) => {setEmail(e.target.value)}}
              onKeyDown={handleKeyDown}
              required={true}
              type="email"
              label="Nombre"
            />
        </FormControl>
      </Box>
  )
}

export default LoginField;

LoginField.defaultProps = {
  setEmail: PropTypes.func
}

LoginField.propTypes = {
  setEmail: PropTypes.func
}

const stackStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: {
    xs: '15em',
    sm: '13em'
  },
}

const stackForm = {
  background: 'white',
  borderRadius: '5px', 
  marginBottom: {
    xs: '1em',
    sm: '0.5em'
  }
}
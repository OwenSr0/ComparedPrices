import React from "react";
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';





  const EmailRegisterField = (props) => {

    const {
      setEmail,
      register
    } = props;

    const handleKeyDown = (event) => {
      if (event.key === 'Enter'&& event.target.value.length > 2) {
        register()
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

export default EmailRegisterField;

EmailRegisterField.defaultProps = {
  setEmail: PropTypes.func
}

EmailRegisterField.propTypes = {
  setEmail: PropTypes.func
}

const stackStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '13em',
}

const stackForm = {
  background: 'white',
  borderRadius: '5px'
}
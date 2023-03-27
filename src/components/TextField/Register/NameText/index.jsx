import React from "react";
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



  const NameRegisterField = (props) => {

    const {
      setName,
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
              <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Nombre</InputLabel>
              <FilledInput style={{ fontSize: '18px', height: '3em'}}
                onChange={(e) => {setName(e.target.value)}}
                onKeyDown={handleKeyDown}
                required={true}
                type='text'
                label="Nombre"
              />
          </FormControl>
        </Box>
    )
  }

export default NameRegisterField;

NameRegisterField.defaultProps = {
  setEmail: PropTypes.func
}

NameRegisterField.propTypes = {
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
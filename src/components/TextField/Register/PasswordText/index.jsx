import React from "react";
import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';




  const PasswordRegisterField = (props) => {

    const {
      setPassword,
    } = props;

    return(
        <Box sx={stackStyle}>
            <Box sx={stackLP}>
              <Typography sx={stackLabel}>Contraseña</Typography>
            </Box>
            <TextField sx={stackText} placeholder='Password' size="small" onChange={(e) => {setPassword(e.target.value)}} InputProps={{ style: { fontSize: 16 } }} InputLabelProps={{ style: { fontSize: 18 } }}>Password</TextField>
        </Box>
    )
  }

export default PasswordRegisterField;

PasswordRegisterField.defaultProps = {
  setPassword: PropTypes.func
}

PasswordRegisterField.propTypes = {
  setPassword: PropTypes.func
}

const stackStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '13em',
}

const stackLP = {
  display:'flex',
  justifyContent: 'space-between',
}

const stackLabel = {
  fontSize: {
    xs: '14px',
    sm: '16px'
  },
  marginBottom: '10px'
}

const stackText = {
  fontSize: '1em',
  background: 'white',
  borderRadius: '4px',
  marginBottom: '0.5em'
}
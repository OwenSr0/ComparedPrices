import React from "react";
import { Box, TextField, Typography, } from '@mui/material';
import PropTypes from 'prop-types';




  const LoginField = (props) => {

    const {
      setEmail,
    } = props;

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackLabel}>Email</Typography>
            <TextField  sx={stackText}  placeholder='Email' size="small" onChange={(e) => {setEmail(e.target.value)}} InputProps={{ style: { fontSize: 18 } }} InputLabelProps={{ style: { fontSize: 18 } }}>Email</TextField>
            <Typography sx={stackTy}>Correo invalido</Typography>
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
  width: '13em',
}

const stackLabel = {
  fontSize: '16px',
  marginBottom: '0.5em'
}

const stackText = {
  fontSize: '1em',
  background: 'white',
  borderRadius: '4px',
  marginBottom: '1em'
}

const stackTy = {
  display: 'none'
}
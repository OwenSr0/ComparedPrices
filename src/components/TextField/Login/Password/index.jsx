import React from "react";
import { Box, TextField, Typography, Link  } from '@mui/material';
import PropTypes from 'prop-types';




  const PasswordField = (props) => {

    const {
      setPassword,
    } = props;

    return(
        <Box sx={stackStyle}>
            <Box sx={stackLP}>
              <Typography sx={stackLabel}>Password</Typography>
              <Link sx={stackLink} href="#" >¿Olvidadaste tu contraseña?</Link>
            </Box>
            <TextField sx={stackText} placeholder='Password' size="small" onChange={(e) => {setPassword(e.target.value)}} InputProps={{ style: { fontSize: 16 } }} InputLabelProps={{ style: { fontSize: 18 } }}>Password</TextField>
            <Typography sx={stackTy}>Contraseña y/o correo incorrecto</Typography>
        </Box>
    )
  }

export default PasswordField;

PasswordField.defaultProps = {
  setPassword: PropTypes.func
}

PasswordField.propTypes = {
  setPassword: PropTypes.func
}

const stackStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: {
    xs: '15em',
    sm: '13em'
  },
}

const stackLP = {
  display:'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: 'auto'
}

const stackLabel = {
  fontSize: {
    xs: '13px',
    sm: '16px',
  },
  marginBottom: '0.5em'
}

const stackText = {
  fontSize: '1em',
  background: 'white',
  borderRadius: '4px',
  marginBottom: '1em',
  width: 'auto'
}

const stackLink = {
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: {
    xs: '12px',
    sm: '16px',
  },
}

const stackTy = {
  display: 'none'
}
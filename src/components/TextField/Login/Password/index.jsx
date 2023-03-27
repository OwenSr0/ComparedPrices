import React from "react";
import { Box, Typography, Link  } from '@mui/material';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





  const PasswordField = (props) => {

    const {
      setPassword,
      login
    } = props;

    const handleKeyDown = (event) => {
      if (event.key === 'Enter'&& event.target.value.length > 2) {
        login()
      }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <Box sx={stackStyle}>
            <Box sx={stackLP}>
              <Typography sx={stackLabel}>Password</Typography>
              <Link sx={stackLink} href="#" >¿Olvidadaste tu contraseña?</Link>
            </Box>
            <FormControl sx={stackForm} variant="filled">
              <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Contraseña</InputLabel>
              <FilledInput style={{ fontSize: '18px', height: '3em'}}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => {setPassword(e.target.value)}}
                onKeyDown={handleKeyDown}
                required={true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
          </FormControl>
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

const stackForm = {
  background: 'white',
  borderRadius: '5px',
  marginBottom: '1em'
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
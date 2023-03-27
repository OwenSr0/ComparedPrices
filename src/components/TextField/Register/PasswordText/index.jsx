import React from "react";
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





  const PasswordRegisterField = (props) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const {
      setPassword,
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
              <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Contraseña</InputLabel>
              <FilledInput style={{ fontSize: '18px', height: '3em'}}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => {setPassword(e.target.value)}}
                required={true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onKeyDown={handleKeyDown}
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

const stackForm = {
  background: 'white',
  borderRadius: '5px'
}
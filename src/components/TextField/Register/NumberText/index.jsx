import React from "react";
import { Box, TextField, Typography, } from '@mui/material';
import PropTypes from 'prop-types';




  const NumberRegisterField = (props) => {

    const {
      setNumber,
    } = props;

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackLabel}>Numero Celular</Typography>
            <TextField  sx={stackText}  placeholder='Numero' size="small" onChange={(e) => {setNumber(e.target.value)}} InputProps={{ style: { fontSize: 18 } }} InputLabelProps={{ style: { fontSize: 18 } }}>Number</TextField>
        </Box>
    )
  }

export default NumberRegisterField;

NumberRegisterField.defaultProps = {
  setEmail: PropTypes.func
}

NumberRegisterField.propTypes = {
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
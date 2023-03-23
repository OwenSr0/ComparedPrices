import React from "react";
import { Box, TextField, Typography, } from '@mui/material';
import PropTypes from 'prop-types';




  const NameRegisterField = (props) => {

    const {
      setName,
    } = props;

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackLabel}>Nombre</Typography>
            <TextField  sx={stackText}  placeholder='Nombre' size="small" onChange={(e) => {setName(e.target.value)}} InputProps={{ style: { fontSize: 16 } }} InputLabelProps={{ style: { fontSize: 18 } }}>Name</TextField>
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

const stackLabel = {
  fontSize: {
    xs: '14px',
    sm: '16px'
  },
  marginBottom: '0.5em'
}

const stackText = {
  fontSize: '1em',
  background: 'white',
  borderRadius: '4px',
  marginBottom: '0.5em'
}
import React from "react";
import { Box, Typography } from '@mui/material';

const RowInfo = (props) => {

    const {
        item= props.props.props.props.item,
    } = props

    return(
        <Box sx={stackInfo}>
            <Typography sx={stackTy}>Plataforma: {item.platform}</Typography>
            <Typography sx={stackTy}>Precio: ${item.price}</Typography>
            {item.brand !== undefined && <Typography sx={stackTy}>Marca: {item.brand}</Typography>}
            {item.model !== undefined && <Typography sx={stackTy}>Modelo: {item.model}</Typography>}
            <Typography sx={stackTy}>Condición: {item.condition}</Typography>
        </Box>
    )
}

export default RowInfo;

const stackInfo = {
    background: '#242526',
    borderRadius: '10px',
    padding: '5px',
    margin: '5px 0 0.5em 0',
    border: 'solid 1px white'
}

const stackTy = {
    fontSize: {
        xs: '14px',
        lg: '17px'
    },
    marginLeft: '1em',
    color: 'white',
}


import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoInfo = (props) => {
    /* agregar una funcion que ejecute imprimir typo cada variable del objeto */
    const item = props.props.item
    const {
        brand = item.brand,
        model = item.model,
        condition = item.condition
    } = props
    return(
        <Box sx={stackStyle}>
            <Typography>Details</Typography>
            <Typography>Marca: {brand}</Typography>
            <Typography>Modelo: {model}</Typography>
            <Typography>Condicion: {condition}</Typography>
            {item.attributes &&
                item.attributes.map((attr)=>(
                    <Typography key={attr.id}>{attr.value_name}: {attr.value_content}</Typography>
                ))} 
        </Box>
    )
}

export default ComparoInfo;

const stackStyle = {
    background: '#242526',
    display: 'flex',
    witdh: '20em',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    margin: '1em',
    padding: '1em'
}
/*
{items &&
                items.map((item)=>(
                    <Typography key={item.id} item={item}>Condicion: {condition}</Typography>
                ))} 
*/
import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoInfo = (props) => {
    /* agregar una funcion que ejecute imprimir typo cada variable del objeto */
    const item = props.props.item
    var brand;
    var model;
    var condition;
    var {
        brand = item.brand,
        model = item.model,
        condition = item.condition
    } = props
    return(
        <Box sx={stackStyle}>
            <Typography sx={{textAlign: 'center'}}>Details</Typography>
            <Box sx={stackBox}>
                {brand && <Typography>Marca: {brand}</Typography>}
                {model && <Typography>Modelo: {model}</Typography>}
                {condition && <Typography>Condición: {condition}</Typography>}
                {item.attributes &&
                    item.attributes.map((attr)=>(
                        <Typography key={attr.id}>{attr.value_name}: {attr.value_content}</Typography>
                    ))} 
            </Box>
        </Box>
    )
}

export default ComparoInfo;

const stackStyle = {
    background: '#242526',
    display: 'flex',
    witdh: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    padding: '1em'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}
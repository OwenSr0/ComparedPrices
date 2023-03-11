import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoInfo = (props) => {
    /* agregar una funcion que ejecute imprimir typo cada variable del objeto */
    const item = props.props.item
    const brand = item.brand;
    const model = item.model;
    const condition = item.condition;

    return(
        <Box sx={stackStyle}>
            <Typography sx={{textAlign: 'center'}}>Detalles</Typography>
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
    height: 'auto',
    width: '14em',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    padding: '1em',
    marginLeft: '1em'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '1em'
}
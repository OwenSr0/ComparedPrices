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
            <Typography sx={stackTy1}>Detalles</Typography>
            <Box sx={stackBox}>
                {brand && <Typography sx={stackTy2}>Marca: {brand}</Typography>}
                {model && <Typography sx={stackTy2}>Modelo: {model}</Typography>}
                {condition && <Typography sx={stackTy2}>Condición: {condition}</Typography>}
                {item.attributes &&
                    item.attributes.map((attr)=>(
                        <Typography sx={stackTy2} key={attr.id}>{attr.value_name}: {attr.value_content}</Typography>
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
    width: {
        lg: '14em'
    },
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    padding: '1em',
    marginTop: {
        xs: '1em',
        lg: ''
    },
    marginLeft: {
        lg: '1em'
    }
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '0.5em'
}

const stackTy1 = {
    textAlign: 'center',
    fontSize: {
        lg: '1em',
        xl: '1.2em'
    }
}

const stackTy2 = {
    fontSize: {
        xs: '18px',
        sm: '24px',
        lg: '18px',
        xl: '22px'
    }
}
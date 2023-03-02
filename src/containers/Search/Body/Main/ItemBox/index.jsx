import React from "react";
import { Box, Typography } from '@mui/material';
import ItemRow from './ItemRow/index'

const ItemBox = (props) => {
    
    const {
        title = props.item.title
    } = props

    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}><Typography sx={stackTy}>{title}</Typography></Box>
            <ItemRow props={props} />
        </Box>
    )
}

export default ItemBox;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '18em',
    height: 'auto',
    background: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '1em'
}

const stackBox = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 1em 0 1em'
}


const stackTy = {
    color: 'black',
    fontSize: '18px',
    textAlign: 'justify',
    textAlignLast: 'center'
}

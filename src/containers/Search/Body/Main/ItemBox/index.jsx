import React from "react";
import { Box, Card, Typography } from '@mui/material';
import ItemRow from './ItemRow/index'

const ItemBox = (props) => {
    
    const {
        title = props.item.title
    } = props

    return(
        <Card sx={stackStyle}>
            <Box sx={stackBox}><Typography sx={stackTy}>{title}</Typography></Box>
            <ItemRow props={props} />
        </Card>
    )
}

export default ItemBox;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: {
        xs: '20em',
        sm: '13em',
        lg: '18em'
    },
    height: 'auto',
    background: '#1E1E1E',
    borderRadius: '20px',
    padding: '10px',
    margin: '1em',
    shadow: '3px white',
    border: 'solid 2px white'
}

const stackBox = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 1em 0 1em'
}


const stackTy = {
    color: 'white',
    fontSize: '18px',
    textAlign: 'justify',
    textAlignLast: 'center'
}

import React from "react";
import { Box, Typography, Button } from '@mui/material';

const ItemComparo = (props) => {

    const item = props.item
    const stack = props.stack
    const {
        title = item.title,
        platform = item.platform,
        price = item.price,
        url = item.url,
        stackTy = stack.stackTy,
        stackTy1 = stack.stackTy1,
        stackTy2 = stack.stackTy2


    } = props
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy}>{title}</Typography>
            <Typography sx={stackTy1}>{platform}</Typography>
            <Typography sx={stackTy2}>${price}</Typography>
            <Button sx={stackButton} onClick={() => window.open(url)}>Ver</Button>
        </Box>
    )
}

export default ItemComparo;

const stackStyle = {
    minHeight: '2.25em',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: {
        xs: '60% 20% 20% 3em',
        sm: '52.5% 17.5% 15% 15%'
    },
    alignItems: 'center'
}

const stackButton = {
    width: {
        sm: '3.5em',
        lg: '3.5em',
        xl: '4.5em'
    },
    height: {
        lg: '2em',
        xl: '2.5em'
    },
    margin: {
        xs: '0 auto 0 auto',
        lg: '0',
        xl: '0 10px 0 1em'
    },
    background: '#2B2C2E',
    boxShadow: ' 0 0 2.5px black',
    color: 'white',
    fontSize: {
        xs: '8px',
        sm: '24px',
        lg: '18px',
        xl: '24px'
    }

}

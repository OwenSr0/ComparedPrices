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
            <Button sx={stackButton} onClick={() => window.open(url)}>Buy</Button>
        </Box>
    )
}

export default ItemComparo;

const stackStyle = {
    display: 'flex',
    overflow: 'auto',
    alignItems: 'center'
}

const stackButton = {
    width: '10vh',
    height: '2.5em',
    marginRight: '10px'
}

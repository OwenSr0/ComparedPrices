import React from "react";
import { Box, Typography, Button } from '@mui/material';

const ItemComparo = (props) => {

    const item = props.item
    const {
        title = item.title,
        platform = item.platform,
        price = item.price,
        url = item.url
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

const stackTy = {
    width: '40vh',
    margin: '0.5em',
    textAlign: 'center'
}

const stackTy1 = {
    width: '20vh',
    margin: '0.5em',
    textAlign: 'center'
}

const stackTy2 = {
    width: '10vh',
    margin: '0.5em',
    textAlign: 'center'
}

const stackButton = {
    width: '10vh',
    height: '2.5em'
}

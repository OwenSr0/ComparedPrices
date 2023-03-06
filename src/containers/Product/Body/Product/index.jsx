import React from "react";
import { Box, Typography, Button } from '@mui/material';

const ProductHeader = (props) => {

    const {
        title = props.item.title,
        price = props.item.price,
        platform = props.item.platform
    } = props

    return(
        <Box sx={stackStyle}>
            <Box>
                <Box><img src="./img/switchE.jpg" alt="" width="100px" height="100px" /></Box>
            </Box>
            <Box sx={stackProduct}>
                <Typography>{title}</Typography>
                <Typography>{platform}</Typography>
            </Box>
            <Box>
            <Typography>best price</Typography>
            <Typography>${price}</Typography>
            <Button variant="contained">buy it</Button>
            </Box>
        </Box>
    )
}

export default ProductHeader;

const stackStyle = {
    background: '#242526',
    width: '45em',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '1em',
    padding: '1em',
    borderRadius: '25px',
}

const stackProduct = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}
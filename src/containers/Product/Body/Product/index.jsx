import React from "react";
import { Box, Typography, Button } from '@mui/material';

const ProductHeader = () => {
    return(
        <Box sx={stackStyle}>
            <Box>
                <Box><img src="./img/switchE.jpg" alt="" width="100px" height="100px" /></Box>
            </Box>
            <Box sx={stackProduct}>
                <Typography>Name of Product</Typography>
                <Typography>Tags</Typography>
            </Box>
            <Box>
            <Typography>best price</Typography>
            <Typography>$1999</Typography>
            <Button variant="contained">buy it</Button>
            </Box>
        </Box>
    )
}

export default ProductHeader;

const stackStyle = {
    background: '#242526',
    width: 'auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '1em'
}

const stackProduct = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}
import React from "react";
import { Box } from '@mui/material';
import ProductHeader from './Header/index'
import ProductBody from './Body/index'

const Product = () => {
    return(
        <Box>
            <ProductHeader />
            <ProductBody />
        </Box>
    )
}

export default Product;
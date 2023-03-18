import React from "react";
import { Box } from '@mui/material';
import ProductHeader from './Header/index';
import ProductBody from './Body/index';
import FullFooter from'../../components/Footer/FullFooter/index';;

const Product = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <ProductHeader />
                <ProductBody />
            </Box>
            <FullFooter />
        </Box>
    )
}

export default Product;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column'
}

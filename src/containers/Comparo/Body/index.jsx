import React from "react";
import { Box } from '@mui/material';
import ProductHeader from './Product/index'
import ComparoSection from './ComparoS/index'

const ComparoBody = () => {
    return(
        <Box>
            <ProductHeader />
            <ComparoSection />
        </Box>
    )
}

export default ComparoBody;
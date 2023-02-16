import React from "react";
import { Box } from '@mui/material';
import ItemRow from './ItemRow/index'

const MainBody = () => {


    return(
        <Box sx={stackStyle}>
            <ItemRow />
            <ItemRow />
            <ItemRow />
            <ItemRow />
            <ItemRow />
        </Box>
    )
}

export default MainBody;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
}


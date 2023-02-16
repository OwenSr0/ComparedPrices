import React from "react";
import { Box, Button } from '@mui/material';

const RowItem = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackImg}><img src="./img/switchE.jpg" alt="Item" width='180px' height='120px' /></Box>
            <Button sx={stackButton}>Visit it</Button>

        </Box>
                
    )
}

export default RowItem;

const stackStyle = {
    gridColumn: '1/6',
    gridRow: '1/11',
    display: 'grid',
    gridTemplateColumns: ' repeat(5,20%)',
    gridTemplateRows: ' repeat(10,10%)',
    border: ' 1px solid #000'
}

const stackImg = {
    gridColumn: '1/6',
    gridRow: '1/9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const stackButton = {
    gridColumn: '1/6',
    gridRow: '9/11',
    margin: '5px',
    display: 'flex',
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
}
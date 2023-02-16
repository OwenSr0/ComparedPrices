import React from "react";
import { Box, Typography, Button } from '@mui/material';

const RowBest = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackP}>
                Mejor precio        
            </Typography>
            <Box sx={stackBestItems}>
                 <Typography sx={stackP}>amazon</Typography>
                <Typography sx={stackP}>100$</Typography>
                <Button>uwu</Button>
            </Box>
            <Box sx={stackBestItems}></Box>
            <Box sx={stackBestItems}></Box>
        </Box>
    )
}

export default RowBest;

const stackStyle = {
    gridColumn: '14/21',
    gridRow: '1/11',
}

const stackBestItems = {
    display: 'flex',
    justifyContent: 'space-around'
}

const stackP = {
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
}


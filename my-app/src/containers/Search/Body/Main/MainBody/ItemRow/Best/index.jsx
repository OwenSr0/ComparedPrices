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
                <Box sx={stackBestItems}>
                    <Typography sx={stackP}>amazon</Typography>
                    <Typography sx={stackP}>100$</Typography>
                    <Button>uwu</Button>
                </Box>
                <Box sx={stackBestItems}>
                    <Typography sx={stackP}>amazon</Typography>
                    <Typography sx={stackP}>100$</Typography>
                    <Button>uwu</Button>
                </Box>
            
        </Box>
    )
}

export default RowBest;

const stackStyle = {
    gridColumn: '14/21',
    gridRow: '1/11',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

}

const stackBox = {
    display: 'flex',

}

const stackBestItems = {
    background: '#242526',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '10px'
}

const stackP = {
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
}


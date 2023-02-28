import React from "react";
import { Box, Typography, Button } from '@mui/material';

const RowBest = (props) => {

    const {
        user= user,
    } = props

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTittle}>
                Mejor precio        
            </Typography>
            
                <Box sx={stackBestItems}>
                    <Typography sx={stackP}>{user.username}</Typography>
                    <Typography sx={stackP}>{user.id}</Typography>
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

const stackBestItems = {
    background: '#242526',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '10px'
}

const stackTittle = {
    display: 'flex',
    color: 'black',
    justifyContent: 'center'
}

const stackP= {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',

}

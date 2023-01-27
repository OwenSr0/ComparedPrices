import React from "react";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

const stackStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
}

const stackCenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const stackBox = {
    background: 'red',
    width: '3em',
    height: '3em',
    borderRadius: '4px'
}



const BoxHub = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackCenter}>
                <Box><img  src="./img/notification.png" alt="noti" width="50" height="50" /></Box>
                <Box sx={stackBox}><Typography >1</Typography></Box>
            </Box>
            <Box sx={stackCenter}>
                <Box><img src="./img/piggy-bank.png" alt="piggy" width="50" height="50" /></Box>
                <Box sx={stackBox}><Typography >2</Typography></Box>
            </Box>
            <Box sx={stackCenter}>
                <Box><img src="./img/balance.png" alt="balance" width="50" height="50" /></Box>
                <Box sx={stackBox}><Typography >3</Typography></Box>
            </Box>
        </Box>
    )
}
export default BoxHub;
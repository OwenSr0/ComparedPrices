import React from "react";
import { Box, Typography } from '@mui/material';

const RowInfo = (props) => {

    const {
        user= user,
    } = props

    return(
        <Box sx={stackInfo}>
            <Typography sx={stackP}>Detalles</Typography>
            <Box sx={stackBox}>
                <Typography sx={stackTy}>{user.name}</Typography>
                <Typography sx={stackTy}>{user.email}</Typography>
                <Typography sx={stackTy}>{user.address.street}</Typography>
                <Typography sx={stackTy}>{user.address.zipcode}</Typography>
                <Typography sx={stackTy}>{user.company.name}</Typography>
            </Box>

        </Box>
    )
}

export default RowInfo;

const stackInfo = {
    gridColumn: '6/14',
    gridRow: '1/11',
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
}

const stackP = {
    display: 'flex',color: 'black', justifyContent: 'center'
}

const stackTy = {
    fontSize: '20px',
    marginLeft: '1em',
    color: 'black',
}

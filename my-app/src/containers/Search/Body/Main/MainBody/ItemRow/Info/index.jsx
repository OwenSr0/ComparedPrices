import React from "react";
import { Box, Typography } from '@mui/material';

const RowInfo = () => {
    return(
        <Box sx={stackInfo}>
            <Typography sx={stackP}>Detalles</Typography>
            <Box sx={stackBox}>
                <Typography sx={stackTy}>Marca: uwu</Typography>
                <Typography sx={stackTy}>Modelo: uwu</Typography>
                <Typography sx={stackTy}>alsdjlf;: uwu</Typography>
                <Typography sx={stackTy}>año: uwu</Typography>
                <Typography sx={stackTy}>a: uwu</Typography>
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

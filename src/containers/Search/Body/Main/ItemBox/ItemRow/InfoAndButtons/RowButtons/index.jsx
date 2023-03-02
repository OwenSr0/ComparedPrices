import React from "react";
import { Box, Button } from '@mui/material';

const RowButtons= (props) => {

    const {
        user= props.props.props.props.user,
    } = props

    return(
        <Box sx={stackStyle}>
            <Button sx={stackButton} variant="contained">Comparo</Button>
            <Button sx={stackButton} variant="contained">Buy</Button>            
        </Box>
    )
}

export default RowButtons;

const stackStyle = {
    minWidth: '8.5em',
    width: '100%',
    display:'flex',
    justifyContent: 'center'
}

const stackButton = {
    height: '2em',
    margin: '0 10px 0 10px'
}

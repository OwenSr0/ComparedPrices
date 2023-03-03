import React from "react";
import { Box, Typography } from '@mui/material';

const RowInfo = (props) => {

    const {
        item= props.props.props.props.item,
    } = props
    return(
        <Box sx={stackInfo}>
            <Typography sx={stackTy}>Platform: {item.platform}</Typography>
            <Typography sx={stackTy}>Price: ${item.price}</Typography>
            {item.brand !== undefined && <Typography sx={stackTy}>Brand: {item.brand}</Typography>}
            {item.model !== undefined && <Typography sx={stackTy}>Model: {item.model}</Typography>}
            <Typography sx={stackTy}>Condition: {item.condition}</Typography>
        </Box>
    )
}

export default RowInfo;

const stackInfo = {
    background: '#242526',
    borderRadius: '10px',
    padding: '5px',
    margin: 'auto 0 0.5em 0'
}

const stackTy = {
    fontSize: '17px',
    marginLeft: '1em',
    color: 'white',
}

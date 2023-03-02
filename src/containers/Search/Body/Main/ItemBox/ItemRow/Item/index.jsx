import React from "react";
import { Box } from '@mui/material';

const RowItem = (props) => {
    const {
        imgurl = props.props.props.item.imgurl,
    } = props
    return(
        <Box sx={stackStyle}>
            <Box sx={stackImg}><img src={imgurl} alt="Item" width='150px' height='150px' /></Box>

        </Box>
                
    )
}

export default RowItem;

const stackStyle = {
    display: 'flex',
    margin: '1em'
}

const stackImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
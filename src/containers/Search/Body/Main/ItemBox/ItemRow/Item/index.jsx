import React from "react";
import { Box } from '@mui/material';

const RowItem = (props) => {
    const {
        imgurl = props.props.props.item.imgurl,
    } = props
    return(
        <Box sx={stackStyle}>
            <Box sx={stackImg}><img src={imgurl} alt="Item" style={stackInImg}  /></Box>

        </Box>
                
    )
}

export default RowItem;

const stackStyle = {
    display: 'flex',
    margin: 'auto'
}

const stackImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
}

const stackInImg = {
    maxWidth: '170px',
    maxHeight: '170px',
    width: 'auto',
    height: 'auto'
}
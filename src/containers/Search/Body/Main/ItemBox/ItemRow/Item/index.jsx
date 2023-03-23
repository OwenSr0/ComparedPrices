import React from "react";
import { Box } from '@mui/material';
import './index.css'

const RowItem = (props) => {
    const {
        imgurl = props.props.props.item.imgurl,
    } = props
    return(
        <Box sx={stackStyle}>
            <Box sx={stackImg}><img src={imgurl} alt="Item" width="auto" height="auto" id="imgItem"/></Box>

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
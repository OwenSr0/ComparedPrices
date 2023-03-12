import React from "react";
import { Box } from '@mui/material';
import Comparo from './Comparo/index'
import ComparoInfo from './ComparoInfo/index'


const ComparoSection = (props) => {

    return(
        <Box sx={stackStyle}>
            <Comparo props={props.items} />
            <ComparoInfo props={props} />
        </Box>
    )
}

export default ComparoSection;

const stackStyle = {
    display: 'flex',
    width: '82vw',
    mxHeight: '16em',
    maxWidth: '51em',
    borderRadius: '25px',

}
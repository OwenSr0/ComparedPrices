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
    flexDirection: {
        xs: 'column',
        lg: 'row'
    },
    width: {
        xs: '85%',
        sm: '25em',
        lg: '40em',
        xl: '50em'
    },
    maxHeight: {
        xs: 'auto',
        lg: '14em',
        xl: '16em'
    },
    borderRadius: '25px',

}
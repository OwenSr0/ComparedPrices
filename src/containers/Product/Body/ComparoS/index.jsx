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
    justifyContent: 'space-around',
    width: '45em',
    margin: '1em',
    padding: '1em',
    borderRadius: '25px',

}
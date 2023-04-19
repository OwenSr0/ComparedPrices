import React from "react";
import { Box } from '@mui/material';
import RowInfo from './Info/index'
import RowButtons from './RowButtons/index'
const InfoAndButtons = (props) => {
    const region = props.region;

    return(
        <Box sx={stackStyle}>
            <RowInfo props={props}/>
            <RowButtons props={props} region={region}/>

        </Box>
    )

}

export default InfoAndButtons;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: { 
        xs: '10em',
        sm: '7em',
        lg: '10em'
    },
    margin: 'auto 0 auto 0'
}
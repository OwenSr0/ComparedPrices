import React from "react";
import { Box } from '@mui/material';
import RowInfo from './Info/index'
import RowButtons from './RowButtons/index'
const InfoAndButtons = (props) => {

    return(
        <Box sx={stackStyle}>
            <RowInfo props={props}/>
            <RowButtons props={props}/>

        </Box>
    )

}

export default InfoAndButtons;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '10em',
    margin: 'auto 0 auto 0'
}
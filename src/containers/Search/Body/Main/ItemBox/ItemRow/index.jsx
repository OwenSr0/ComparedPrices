import React from "react";
import { Box} from '@mui/material';
import RowItem from './Item/index';
import InfoAndButtons from './InfoAndButtons/index'

const ItemRow = (props) => {
    const region = props.region;

    return(
        <Box sx={stackStyle}>
            <RowItem props={props}/>
            <InfoAndButtons props={props} region={region}/>
        </Box>
    )
}

export default ItemRow;

const stackStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    marginTop: {
        sm: '0.5em',
        md: '0'
    }
}






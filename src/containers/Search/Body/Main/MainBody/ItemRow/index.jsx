import React from "react";
import { Box} from '@mui/material';
import RowItem from './Item/index';
import RowInfo from './Info/index';
import RowBest from './Best/index'

const ItemRow = (props) => {

    const {
        user= user,
    } = props

    return(
        <Box sx={stackItems}>
            <RowItem />
            <RowInfo user={user}/>
            <RowBest user={user}/>
        </Box>
    )
}

export default ItemRow;

const stackBox = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const stackItems = {
    display: 'grid',
    gridTemplateColumns: ' repeat(20,5%)',
    gridTemplateRows: ' repeat(10,10%)',
    width: '26em',
    height: '10em',
    background: 'white',
    borderRadius: '20px',
    padding: '1em',
    margin: '1em'
}





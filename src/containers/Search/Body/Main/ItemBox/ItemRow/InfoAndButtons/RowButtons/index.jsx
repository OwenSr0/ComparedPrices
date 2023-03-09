import React from "react";
import { Box, Button } from '@mui/material';

const RowButtons= (props) => {

    const {
        item= props.props.props.props.item,
    } = props

    const handleClick = (e) => {
        console.log()
        window.location.assign(`/product?q=${item.id}`);
      }

    return(
        <Box sx={stackStyle}>
            <Button sx={stackButton} onClick={handleClick} >Comparo</Button>
            <Button sx={stackButton} onClick={() => window.open(item.url)} variant="contained">Buy</Button>            
        </Box>
    )
}

export default RowButtons;

const stackStyle = {
    minWidth: '8.5em',
    width: '100%',
    display:'flex',
    justifyContent: 'center'
}

const stackButton = {
    height: '2em',
    margin: '0 10px 0 10px'
}

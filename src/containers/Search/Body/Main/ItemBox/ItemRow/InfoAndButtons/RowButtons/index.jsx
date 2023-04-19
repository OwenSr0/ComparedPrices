import React from "react";
import { Box, Button } from '@mui/material';

const RowButtons= (props) => {

    const {
        item = props.props.props.props.item,
        region = props.region
    } = props

    const handleClick = (e) => {
        window.location.assign(`/${region}/product?platform=${item.platform}&q=${item.id}`);
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
    maxWidth: {
        xs: '10em',
        sm: '7em',
        lg: '10em'
    },
    width: '100%',
    display:'flex',
    justifyContent: 'center'
}

const stackButton = {
    height: '2em',
    margin: '0 10px 0 10px',
    fontSize: {
        xs: '18px',
        sm: '14px',
        lg: '24px'
    }
}

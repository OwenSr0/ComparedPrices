import React, {useState, useEffect} from "react";
import { Box, Typography, Button } from '@mui/material';

const ProductHeader = (props) => {

    const {
        title = props.item.title,
        price = props.item.price,
        platform = props.item.platform,
        image = props.item.imgurl,
        url = props.item.url,
    } = props

    return(
        <Box sx={stackStyle}>
            <Box sx={stackBoxImg}>
                <Box sx={stackImg}><img src={image} alt="image" style={stackInImg} /></Box>
            </Box>
            <Box sx={stackProduct}>
                <Typography sx={stackTitle}>{title}</Typography>
                <Typography>{platform}</Typography>
            </Box>
            <Box sx={stackBox}>
                <Typography sx={{textAlign: 'center', margin: '1em'}}>${price}</Typography>
                <Button sx={stackButton} onClick={() => window.open(url)}>Comprar</Button>
            </Box>
        </Box>
    )
}

export default ProductHeader;

const stackStyle = {
    background: '#242526',
    width: '82vw',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1em',
    padding: '1em',
    borderRadius: '25px',
}

const stackBoxImg = {
    background: 'white',
    display: 'flex',
    padding: '20px',
    borderRadius: '26px'
}

const stackImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
}

const stackInImg = {
    maxWidth: '170px',
    maxHeight: '170px',
    width: 'auto',
    height: 'auto'
}

const stackProduct = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
}
const stackTitle = {
    maxWidth: '55vw',
    textAlign: 'center',
    margin: '1em'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const stackButton = {
    background: '#2B2C2E',
    boxShadow: ' 0 0 2.5px black',
    color: 'white'
}

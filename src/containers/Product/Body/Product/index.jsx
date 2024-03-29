import React from "react";
import { Box, Typography, Button } from '@mui/material';
import './index.css'

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
                <Box sx={stackImg}><img src={image} alt="product" id="imgProducts"/></Box>
            </Box>
            <Box sx={stackProduct}>
                <Typography sx={stackTitle}>{title}</Typography>
                <Typography sx={stackTyPlatform}>{platform}</Typography>
            </Box>
            <Box sx={stackBox}>
                <Typography sx={stackTyPlatform}>${price}</Typography>
                <Button sx={stackButton} onClick={() => window.open(url)}>Comprar</Button>
            </Box>
        </Box>
    )
}

export default ProductHeader;

const stackStyle = {
    background: '#242526',
    width: {
        xs: '85%',
        sm: '25em',
        lg: '40em',
        xl: '50em'
    },
    display: 'flex',
    flexDirection: {
        xs: 'column',
        sm: 'row'
    },
    justifyContent: 'space-around',
    marginBottom: '1em',
    padding: '1em',
    borderRadius: '25px',
    alignItems: {
        xs: 'center',
        lg: 'unset'
    }
}

const stackBoxImg = {
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
        xs: '10px'
    },
    borderRadius: '26px',
    width: 'auto',
}

const stackImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: {
        xs: '125px',
        sm: '125px',
        xl: '150px'
    },
    maxHeight: {
        xs: '125px',
        sm: '125px',
        xl: '150px'
    }
}

const stackProduct = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
}
const stackTitle = {
    maxWidth: {
        xs: '90%',
        sm: '80%',
        lg: '30em',
        xl: '35em'
    },
    textAlign: 'center',
    margin: '1em',
    fontSize: {
        xs: '14px',
        sm: '24px'
    }
}

const stackTyPlatform = {
    fontSize: {
        xs: '18px',
        sm: '24px'
    },
    textAlign: 'center',
    margin: {
        xs: '0.2em', 
        sm: '1em'
    }
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

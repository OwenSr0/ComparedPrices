import React from "react";
import { Box, Typography } from '@mui/material';
import ItemComparo from './ItemComparo/index'

const Comparo = (props) => {

    const {
        items = props.props
    }  = props
    
    return(
        <Box sx={stackStyle}>
            <Box sx={stackHeader}>
                <Typography sx={stackTy}>title</Typography>
                <Typography sx={stackTy1}>platform</Typography>
                <Typography sx={stackTy2}>price</Typography>
            </Box>
            <Box sx={stackBox}>
                {items &&
                    items.map((item)=>(
                        <ItemComparo key={item.id}  item={item} stack={stack}/>
                    ))} 
                

            </Box>
        </Box>
    )
}

export default Comparo;

const stackStyle = {
    background: '#242526',
    height: '19em',
    borderRadius: '25px',
    width: 'auto',
    maxWidth: '34.2em',
    padding: '1em',
}

const stackHeader = {
    display: 'flex'
}

const stackBox = {
    overflow: 'auto',
    maxHeight: '15em',
        '&::-webkit-scrollbar': {
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          width: '8px',
          padding: '1em'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '5px',
          backgroundColor: 'black',
        },
}

const stackTy = {
    width: '45vh',
    margin: '0.5em',
    textAlign: 'center',
    fontSize: '20px'
}

const stackTy1 = {
    width: '25vh',
    margin: '0.5em',
    textAlign: 'center',
    fontSize: '20px'
}

const stackTy2 = {
    width: '10vh',
    margin: '0.5em',
    textAlign: 'center',
    fontSize: '20px'
}

const stack = {
    stackTy: stackTy,
    stackTy1: stackTy1,
    stackTy2: stackTy2
}
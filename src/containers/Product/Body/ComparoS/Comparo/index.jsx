import React from "react";
import { Box, Typography } from '@mui/material';
import ItemComparo from './ItemComparo/index'

const Comparo = (props) => {

    const {
        items = props.props
    }  = props
    console.log(items)
    return(
        <Box sx={stackStyle}>
            <Box sx={stackHeader}>
                <Typography sx={stackTy}>Título</Typography>
                <Typography sx={stackTy1}>Pagina</Typography>
                <Typography sx={stackTy2}>Precio</Typography>
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
    height: 'auto',
    width: {
        lg: '25em',
        xl: '36em'
    },
    borderRadius: '25px',
    padding: '1em',
}

const stackHeader = {
    display: 'grid',
    gridTemplateColumns: {
        xs: '60% 15% 25%',
        sm: '52.5% 17.5% 15% 15%'
    },
    alignItems: 'center'
}

const stackBox = {
    overflow: 'auto',
    maxHeight: {
        xs: '11em',
        lg: '10em',
        xl: '11em'
    },
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
    margin: '0.5em',
    textAlign: 'center',
    gridColumnStart: '1',
    fontSize: {
        xs: '10px',
        sm: '19px',
        lg: '16px',
        xl: '20px'
    }
}

const stackTy1 = {
    textAlign: 'center',
    gridColumnStart: '2',
    fontSize: {
        xs: '10px',
        sm: '19px',
        lg: '16px',
        xl: '20px'
    }
}

const stackTy2 = {
    textAlign: 'center',
    gridColumnStart: '3',
    fontSize: {
        xs: '10px',
        sm: '19px',
        lg: '16px',
        xl: '20px'
    }
}

const stack = {
    stackTy: stackTy,
    stackTy1: stackTy1,
    stackTy2: stackTy2
}
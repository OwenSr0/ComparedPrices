import React from "react";
import { Box, Typography } from '@mui/material';
import './index.css'

const ComparoInfo = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Box sx={stackItem1}><img src="./img/good-price.png" alt="good" width="360px" id="imgGood"/></Box>
                <Box sx={stackItem}>
                    <Box sx={stackItems}> 
                        <Typography sx={stackTy1}>
                            Comparo Land
                        </Typography>
                        <Typography sx={stackTy2}> 
                            Somos tu plataforma de confianza para encontrar el producto que necesitas al mejor precio, sin costo y sin registros previos.
                            Nuestro enfoque es brindarte la mejor experiencia de usuario.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            
            <Box sx={stackBox}>
                <Box sx={stackItem}>
                    <Box sx={stackItems}> 
                        <Typography sx={stackTy1}>
                        ¿Qué ofrecemos?
                        </Typography>
                        <Typography sx={stackTy2}> 
                            Nos enorgullece ofrecer un algoritmo de busqueda de productos de vanguardia que te ayuda a encontrar lo que necesitas al mejor 
                            precio. Nuestro algoritmo utiliza tus búsquedas y preferencias para ofrecerte la mejor opción.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={stackItem}><img src="./img/settings.png" alt="setting" width="360px" id="imgSetting"/></Box>
            </Box>

        </Box>
    )
}

export default ComparoInfo;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const stackBox = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        sm: 'row'
    },
    justifyContent: 'center',
    margin: {
        sm: '2em 1.5em 0 1.5em',
        md: '2em 2em 0 2em'
    }
}

const stackItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
        xs: '16em',
        sm: '14em',
        lg: '18em',
        xl: '16em'
    },
}
const stackItem1 ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
        xs: '16em',
        sm: '14em',
        lg: '18em',
        xl: '16em'
    },
    order: {
        xs: '1',
        sm: '0'
    }
}

const stackItems = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#242526',
    padding: '1em',
    borderRadius: '1em',
    margin: {
        xs: '1em 0 1em 0',
        sm: '0'
    }
}

const stackTy1 = {
    textAlign: 'justify',
    fontSize: '1.3em'
}


const stackTy2 = {
    textAlign: 'justify',
    marginTop: '1em',
    fontSize: {
        xs: '18px',
        sm: '25px'
    }
    
}
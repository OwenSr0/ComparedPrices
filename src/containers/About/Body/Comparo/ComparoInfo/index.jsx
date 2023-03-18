import React from "react";
import { Box, Typography } from '@mui/material';

const ComparoInfo = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Box sx={stackItem}><img src="./img/good-price.png" alt="good" style={stackImg}/></Box>
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
                <Box sx={stackItem}><img src="./img/settings.png" alt="setting" style={stackImg}/></Box>
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
    justifyContent: 'center',
    marginTop: '2em'
}

const stackItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30vw',
    
}

const stackItems = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#242526',
    padding: '1em',
    borderRadius: '1em'
}




const stackTy1 = {
    textAlign: 'justify',
    fontSize: '1.2em'
}


const stackTy2 = {
    textAlign: 'justify',
    marginTop: '1em',
    fontSize: '25px'
    
}

const stackImg = {
    width: '20vw',
    height: '20vw',
}
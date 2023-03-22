import React from "react";
import { Box, Typography, Link } from '@mui/material';

const InfoToS = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy1}>Condiciones de uso</Typography>
            <Typography sx={stackTy2}>
                Ultima actualización: 17-03-2023 
                <br/><br/>
                Este sitio web ofrece un servicio gratuito, por lo que no garantiza su disponibilidad o funcionalidad. Al utilizar este sitio, aceptas las condiciones de uso y estas conciente que lo haces bajo tu propio riesgo.
                
                Algunos de los contenidos de esta página provienen de fuentes externas, como Mercado Libre, Inc. El contenido se muestran tal cual, además pueden cambiar o eliminarse en cualquier momento sin previo aviso
                <br/><br/>
                Comparo Land es participante como aplicacion en Developers de Mercado Libre, que ofrece herramientas para que los desarrolladores y acceso a ciertos entornos de Mercado Libre, Inc.
                <br/><br/>
                Los productos, precios y disponibilidad mostrados en este sitio están sujetos a cambios en cualquier momento, incluso después de que realices una compra. Te recomendamos revisar los términos y condiciones de Mercado Libre antes de realizar cualquier transacción.
                <br/><br/> 
                Puedes revisar los terminos y condiciones de <Link onClick={() => window.open('https://www.mercadolibre.com.mx/ayuda/terminos-y-condiciones-uso-del-sitio_2090')}>Mercado Libre</Link>
            </Typography>
        </Box>
    )
}

export default InfoToS;

const stackStyle = {
    width: {
        xs: '18em',
        sm: '22.5em',
        md: '25em',
        lg: '35em',
        xl: '40em'
    },
}

const stackTy1 = {
    fontSize: '1.5em',
}

const stackTy2 = {
    marginTop: '10px',
    textAlign: 'justify',
    fontSize: {
        xs: '14px',
        sm: '24px'
    }
}
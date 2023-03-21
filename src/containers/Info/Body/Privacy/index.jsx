import React from "react";
import { Box, Typography } from '@mui/material';

const InfoPrivacy = () => {
    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy1}>Aviso de privacidad</Typography>
            <Typography sx={stackTy2}>
            Ultima actualización: 17-03-2023 
            <br/><br/>
            En Comparo Land, tratamos de recolectar la menor cantidad posible de información personal de nuestros usuarios. Sin embargo, es necesario proporcionar una dirección de correo electrónico para crear una cuenta, recibir alertas de precios y otros mensajes relacionados con la página. Si prefieres no ser contactado por nosotros, por favor no proporciones tu correo electrónico en nuestra página. Si en algún momento deseas dejar de recibir correos o ser eliminado de nuestra base de datos, puedes solicitarlo enviando un correo a soporte@comparo.land.
            <br/><br/>
            Para financiar la página, utilizamos servicios de terceros, incluyendo marketing de afiliados. En algunos casos, si compras un producto a través de nuestra página, podemos recibir una comisión por esa venta. Sin embargo, esto no afectará el precio final que pagarás por el producto, ya que estamos comprometidos a ofrecerte el mejor precio posible. No recopilamos información sobre tus compras ni almacenamos ningún dato relacionado con tu información financiera.
            <br/><br/>
            Si tienes alguna otra pregunta sobre nuestra política de privacidad, no dudes en ponerte en contacto con nosotros en cualquier momento.
            </Typography>
        </Box>
    )
}

export default InfoPrivacy;

const stackStyle = {
    width: {
        xs: '18em',
        sm: '22.5em',
        md: '25em',
        lg: '35em',
        xl: '40em'
    },
    marginTop: '2em',
    marginBottom: '2em'
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
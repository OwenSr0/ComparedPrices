import React from "react";
import { Box } from "@mui/system";
import { Typography, Container } from '@mui/material';

const BoxHub = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackCenter}>
                <Box><img  src="./img/notification.png" alt="noti" width="80" height="80" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>Ahora puedes recibir noticiaciones de tus productos favoritos, etc.</Typography></Container>
            </Box>
            <Box sx={stackCenter}>
                <Box><img src="./img/piggy-bank1.png" alt="piggy" width="90" height="80" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>Ahorra dinero para darte tus gustitos, etc.</Typography></Container>
            </Box>
            <Box sx={stackCenter}>
                <Box><img src="./img/balance.png" alt="balance" width="80" height="80" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>Compara precios y obten el mejor producto al menor precio.</Typography></Container>
            </Box>
        </Box>
    )
}
export default BoxHub;

const stackStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '2.5em'
}

const stackCenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const stackContainer = {
    background: '#242526',
    display: 'flex',
    alignItems: 'center',
    width: '10em',
    height: '6em',
    borderRadius: '25px',
    marginTop: '1em',
}

const stackText = {
    textAlign: 'center',
    textJustify: 'auto',
    padding: '1em 0 1em 0'
}
import React from "react";
import { Box } from "@mui/system";
import { Typography, Container } from '@mui/material';

const BoxHub = () => {
    return(
        <Box sx={stackStyle}>
            <Box sx={stackCenter}>
                <Box><img  src="/img/notification.png" alt="noti" width="70" height="70" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>No pierdas más tiempo, recíbe los mejores precios</Typography></Container>
            </Box>
            <Box sx={stackCenter1}>
                <Box><img src="/img/piggy-bank1.png" alt="piggy" width="80" height="70" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>Encuentra los mejores precios y ahorra</Typography></Container>
            </Box>
            <Box sx={stackCenter}>
                <Box><img src="/img/balance.png" alt="balance" width="70" height="70" /></Box>
                <Container sx={stackContainer}><Typography sx={stackText}>La forma más fácil de comparar precios y ahorrar dinero</Typography></Container>
            </Box>
        </Box>
    )
}
export default BoxHub;

const stackStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
}

const stackCenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}

const stackCenter1 = {
    display: {
        xs: 'none',
        sm: 'flex'
    },
    flexDirection: 'column',
    alignItems: 'center',

}

const stackContainer = {
    background: '#242526',
    display: 'flex',
    alignItems: 'center',
    width: {
        xs: "8em",
        sm: "7.5em",
        lg: '10em'
    },
    height: {
        xs: "6.5em",
        sm: "7em",
        lg: '5em',
        xl: '5.5em'
    },
    borderRadius: '25px',
    marginTop: '1em',
}

const stackText = {
    textAlign: 'center',
    textJustify: 'auto',
    padding: '1em 0 1em 0',
    fontSize: {
        xs: "13px",
        sm: "18px",
        lg: '18px',
        xl: '24px'
    }
}
import React from "react";
import { Box, Card, Typography, Button } from '@mui/material';

const BlogCard = () => {

    return(
        <Card sx={stackStyle}>
            
            <Typography sx={stackTitle}>Celulares mas vendidos en el 2022</Typography>
            <Box sx={{display:'flex'}}>
                <img src="https://freddyvega.com/content/images/size/w2000/2022/05/sabana.jpg" alt="" width="640px" height="400px" />
                <Box sx={stackBox2}>
                    <Typography sx={stackDescripton}>Amy es mi primer foto en Instagram. La conocí por más de doce años, diez de los cuáles no nos caimos tan bien. Ella era salvaje, independiente, explosiva, energética y</Typography>
                    <Box>
                        <Typography sx={stackTy}>Owen Sanchez</Typography>
                        <Box sx={stackBox3}>
                            <Typography sx={stackTy}>6 AGO. 2022</Typography>
                            <Typography sx={stackTy}>10 MIN READ</Typography>
                        </Box>
                        <Button sx={stackButton} variant="outlined">Ver</Button>
                    </Box>
                    
                </Box>
            </Box>

        </Card>
    )
}

export default BlogCard;

const stackStyle = {
    background: '#242526',
    padding: '1em',
    borderRadius: '15px',
    margin: '1em'
}

const stackBox2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '1em',
    width: {
        xl: '8em'
    }
}

const stackBox3 = {
    display: 'flex',
    justifyContent: 'space-between'
}

const stackTitle = {
    textAlign: 'center',
    color: 'white',
    fontSize: {
        xl: '26px'
    },
    marginBottom: '5px'
}

const stackDescripton = {
    color: 'white',
    fontSize: {
        xl: '18px'
    },
}

const stackTy = {
    color: 'white'
}

const stackButton = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto 0 auto'
}
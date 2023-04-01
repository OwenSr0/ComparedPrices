import React from "react";
import { Box, Card, Typography, Button } from '@mui/material';

const BlogCard = (props) => {

    const { 
        title,
        img,
        resume,
        autor,
        date,
        time,
    } = props.item
    return(
        <Card sx={stackStyle}>
            
            <Typography sx={stackTitle}>{title}</Typography>
            <Box sx={{display:'flex'}}>
                <img src={img} width="640px" height="400px" />
                <Box sx={stackBox2}>
                    <Typography sx={stackDescripton}>{resume}</Typography>
                    <Box>
                        <Typography sx={stackTy}>{autor}</Typography>
                        <Box sx={stackBox3}>
                            <Typography sx={stackTy}>{date}</Typography>
                            <Typography sx={stackTy}>{time}</Typography>
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
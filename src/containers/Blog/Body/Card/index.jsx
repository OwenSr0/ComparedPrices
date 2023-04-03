import React, {useState} from "react";
import { Box, Card, Typography, Button } from '@mui/material';
import './index.css'

const BlogCard = (props) => {

    const [resumen, setResume] = useState('')

    const user = props.user;
    const { 
        title,
        img,
        resume,
        autor,
        date,
        time,
    } = props.item

    function handleClick(){
        window.location.assign(`/blog?q=${title}`);
    }

    if(resume.length > 250 && !resumen){
        setResume(resume.slice(0, 250) + '...')
    }
    return(
        <Card sx={stackStyle}>
            
            <Typography sx={stackTitle}>{title}</Typography>
            <Box sx={stackBox1}>
                <img src={img} alt="principal" id="imgArticle"/>
                <Box sx={stackBox2}>
                    <Typography sx={stackDescripton}>{resumen}</Typography>
                    <Box sx={stackBox3}>
                        <Typography sx={stackTy}>{autor}</Typography>
                        <Box sx={stackBox4}>
                            <Typography sx={stackTy}>{date}</Typography>
                            <Typography sx={stackTy}>{time}</Typography>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            {user === true && <Button sx={stackButton} onClick={(e) => {window.location.assign(`/blog/add?q=${title}`)}} variant="contained" color="warning">Editar</Button>}
                            <Button sx={stackButton} onClick={handleClick} variant="contained">Ver</Button>
                        </Box>
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
    margin: '0.5em',
}

const stackBox1 = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        lg: 'row'
    },
    alignItems: {
        xs: 'center',
        lg: 'center'
    }
}

const stackBox2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: {
        lg: '1em'
    },
    width: {
        xs: '15em',
        sm: '22.5em',
        lg: '10em',
        xl: '8em'
    }
}

const stackBox3 = {
    marginTop: {
        xs: '0.5em',
        lg: '0'
    },
}

const stackBox4 = {
    display: 'flex',
    justifyContent: 'space-between'
}

const stackTitle = {
    textAlign: 'center',
    color: 'white',
    fontSize: {
        xs: '20px',
        sm: '30px',
        lg: '26px'
    },
    marginBottom: '5px'
}

const stackDescripton = {
    textAlign: 'justify',
    color: 'white',
    marginTop: {
        xs: '1em',
        lg: '0'
    },
    fontSize: {
        xs: '16px',
        sm: '24px',
        lg: '18px'
    },
}

const stackTy = {
    color: 'white',
    fontSize: {
        xs: '16px',
        sm: '24px',
        lg: '18px'
    }
}

const stackButton = {
    display: 'flex',
    justifyContent: 'center',
    width: {
        xs: '5em'
    },
    fontSize: {
        xs: '16px',
        sm: '24px',
        lg: '24px',
    },
    margin: '10px auto 0 auto'
}
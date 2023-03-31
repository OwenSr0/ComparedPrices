import React from "react";
import { Box } from '@mui/material';
import BlogCard from './Card/index';

const BodyBlog = () => {
    return(
        <Box sx={stackStyle}>
            <BlogCard />
            
        </Box>
    )
}

export default BodyBlog;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center'
}
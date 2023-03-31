import React from "react";
import { Box } from '@mui/material';
import FullHeader from '../../components/Header/FullHeader/index';
import BodyBlog from './Body/index';

const Blog = () => {
    const title = 'Blog';
    return(
        <Box>
            <FullHeader title={title}/>
            <BodyBlog />
            
        </Box>
    )
}

export default Blog;
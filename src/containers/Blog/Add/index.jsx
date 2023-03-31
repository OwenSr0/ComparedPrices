import React from "react";
import { Box } from '@mui/material';
import FullHeader from '../../../components/Header/FullHeader/index';
import BlogAddBody from './Body/index';

const BlogAdd = () => {
    const title = 'Blog add';
    return(
        <Box>
            <FullHeader title={title}/>
            <BlogAddBody />
        </Box>
    )
}

export default BlogAdd;
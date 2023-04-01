import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import FullHeader from '../../components/Header/FullHeader/index';
import BodyBlog from './Body/index';
import BodyArticle from './BodyArticle/index';

import { useLocation } from 'react-router-dom';


const Blog = () => {
    const title = 'Blog';

    const [items, setItems] = useState([])

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const itemId = query.get('q');

    
    async function getBlogs() {
        const res = await axios.get('http://localhost:80/api/blog');
        try {
            console.log(res.data)
            setItems(res.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        if(itemId === null){
        getBlogs()
        }
        },[])
        

    return(
        <Box>
            <FullHeader title={title}/>

            {itemId !== null ? (
                <BodyArticle itemId={itemId}/>
                ) : (
                    <BodyBlog items={items}/>
                    )}
        </Box>
    )
}

export default Blog;
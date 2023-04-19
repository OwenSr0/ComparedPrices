import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import FullHeader from '../../components/Header/FullHeader/index';
import BodyBlog from './Body/index';
import BodyArticle from './BodyArticle/index';
import FullFooter from '../../components/Footer/FullFooter/index';

import { useLocation } from 'react-router-dom';


const Blog = (props) => {
    const region = props.region;
    const title = 'Blog';
    const link = 'blog';

    const [items, setItems] = useState([])

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const itemId = query.get('q');

    
    async function getBlogs() {
        const res = await axios.get('https://backend.comparo.land/api/blog');
        try {
            setItems(res.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        if(itemId === null){
        getBlogs()
        }
        },[itemId])
        

    return(
        <Box>
            <FullHeader title={title} link={link} region={region}/>
            {itemId !== null ? (
                <BodyArticle itemId={itemId} region={region}/>
                ) : (
                    <BodyBlog items={items} region={region}/>
                    )}
            <FullFooter region={region}/>
        </Box>
    )
}

export default Blog;
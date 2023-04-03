import React, {useState, useEffect} from "react";
import { Box } from '@mui/material';
import FullHeader from '../../../components/Header/FullHeader/index';
import BlogAddBody from './Body/index';

import { useNavigate } from 'react-router-dom';

import checkUser from '../../../functions/checkUser';



const BlogAdd = () => {

    const [user, setUser] = useState('');

    const navigate = useNavigate();

    const title = 'Blog edit';
    const loggedUserToken = window.localStorage.getItem('loggedAppUser');

    useEffect(()=>{
        if(loggedUserToken){
                checkUser(loggedUserToken, true).then((fulfilledValue) => {
                    setUser(fulfilledValue);
                  });
        } else{
            navigate(`/blog`);
        }
    },[navigate, loggedUserToken, user])

    return(
        <Box>
            
            { user === true &&
            <Box>
                <FullHeader title={title}/>
                <BlogAddBody/>
            </Box>}
        </Box>
    )
}

export default BlogAdd;
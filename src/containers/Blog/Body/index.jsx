import React, {useState, useEffect} from "react";
import { Box } from '@mui/material';
import BlogCard from './Card/index';

import checkUser from '../../../functions/checkUser';

const BodyBlog = (props) => {

    const [user, setUser] = useState('')

    const loggedUserToken = window.localStorage.getItem('loggedAppUser')

    const {
        items = props.items,
        region = props.region
    } = props

    useEffect(()=>{
        if(loggedUserToken && !user){
                checkUser(loggedUserToken, false).then((fulfilledValue) => {
                    setUser(fulfilledValue);
                  });
        }
    },[setUser, loggedUserToken, user])

    return(
        <Box sx={stackStyle}>
            {items ? (
                    (() => {
                        const itemBoxes = [];
                        for (let item in items) {
                            const Item = items[item]
                            itemBoxes.push(<BlogCard key={item} item={Item} user={user} region={region}></BlogCard>);
                        }
                        return itemBoxes;
                        })()
                ) : (
                    <div>No items to display</div>
                )}
            
        </Box>
    )
}

export default BodyBlog;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em'
}
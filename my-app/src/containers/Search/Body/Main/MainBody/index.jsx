import React, {useState, useEffect} from "react";
import { Box } from '@mui/material';
import ItemRow from './ItemRow/index'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MainBody = () => {

    const[users, setUsers] = useState([])
    const[dinamycUsers, setDinamycUsers] = useState([])


    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const search = query.get('q');
    if(search == null){

    }

    const getUsers=async()=> {
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setUsers(response.data);
            setDinamycUsers(response.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getUsers();
    },[])

    return(
        <Box sx={stackStyle}>
            {users &&
            users.map((user)=>(
                <ItemRow key={user.id} user={user}/>
            ))}
        </Box>
    )
}

export default MainBody;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}


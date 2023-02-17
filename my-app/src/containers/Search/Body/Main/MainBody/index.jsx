import React, {useState, useEffect} from "react";
import { Box } from '@mui/material';
import ItemRow from './ItemRow/index'
import axios from 'axios';

const MainBody = (props) => {

    const {
        search
    } = props

    const[users, setUsers] = useState([])
    const[dinamycUsers, setDinamycUsers] = useState([])

    const getUsers=async()=> {
        await axios.get(`https://jsonplaceholder.typicode.com/${search}`)
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


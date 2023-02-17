import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import MainHeader from './MainHeader/index'
import ItemRow from '../Main/MainBody/ItemRow/index'
import Empty from "../../../Others/Empty";

import { useLocation } from 'react-router-dom';
import NotFound from "./MainBody/NotFound";

const SearchMain = () => {

    const[users, setUsers] = useState([])
    const[dinamycUsers, setDinamycUsers] = useState([])
    const[valid, setValid] = useState('')

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const search = query.get('q');


    const getUsers=async()=> {
        await axios.get(`https://jsonplaceholder.typicode.com/${search}`)
        .then(response=>{
            setUsers(response.data);
            setDinamycUsers(response.data);
            setValid('')
        }).catch(err=>{
            setValid('No se han encontrado resultados');
            console.log(err);
        })
    }

    useEffect(()=>{
        if (search) {
            getUsers();
        } else {
            setValid(' ');
        }
    },[])

    return(
        <Box>
            {users.length > 0 && <MainHeader/>}
            <Box sx={stackStyle}>
                {users &&
                users.map((user)=>(
                    <ItemRow key={user.id} user={user}/>
                ))}
            </Box>
            {users.length > 0 && <MainHeader/>}
            {valid.length > 0 && <NotFound valid={valid}/>}
        </Box>
    )
}

export default SearchMain;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

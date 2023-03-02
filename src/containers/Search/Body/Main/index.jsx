import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import MainHeader from './MainHeader/index'
import ItemBox from './ItemBox/index'
import NotFound from "./ItemBox/NotFound/index";

import { useLocation } from 'react-router-dom';


const SearchMain = () => {

    const[items, setItems] = useState([])
    const[valid, setValid] = useState('')

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const search = query.get('q');


    const getUsers=async(search)=> {
        var search = {
            search: search
        }
        axios.post('/api/searches/search', search)
        .then(res => {
            setItems(res.data);
            console.log(res.data)
            
            if(res.data.length == 0){
                setValid('No se han encontrado resultados');
            } else{
                setValid('')
            }
        })
        .then(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        console.log(search)
        if (search) {
            getUsers(search);
        } else {
            setValid('');
        }
    },[])

    return(
        <Box>
            {items.length > 0 && <MainHeader/>}
            <Box sx={stackStyle}>
                {items &&
                items.map((item)=>(
                    <ItemBox key={item.id} item={item}/>
                ))}
            </Box>
            {items.length > 0 && <MainHeader/>}
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

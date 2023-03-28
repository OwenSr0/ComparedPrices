import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import PaginationSearch from '../../../../components/Other/Paginations/PaginationSearch/index';
import ItemBox from './ItemBox/index';
import NotFound from "./ItemBox/NotFound/index";

import { useLocation } from 'react-router-dom';


const SearchMain = () => {

    const[items, setItems] = useState([])
    const[valid, setValid] = useState('')

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    var page = parseInt(query.get('page') || '1', 6);
    const search = query.get('q');

    const getItems=async(search)=> {
        if(isNaN(page)){
            page = 1;
        }
        var searchs = {
            search: search,
            page: page - 1,
        }
        try {
            const res = await axios.post('https://backend.comparo.land/api/searches/search', searchs);
            setItems(res.data);
            if (res.data.length === 0) {
              setValid('No se han encontrado resultados');
            } else {
              setValid('');
            }
          } catch (err) {
            setValid('No se han encontrado resultados');
            console.log(err);
          }
        };

    useEffect(()=>{
        if (search) {
            getItems(search);
        } else {
            setValid('');
        }
    },[page])

    return(
        <Box>
            {items.length > 0 && <PaginationSearch/>}
            <Box sx={stackStyle}>
                {items ? (
                    (() => {
                    const itemBoxes = [];
                    for (let i = 0; i < items.length; i++) {
                        itemBoxes.push(<ItemBox key={items[i].id} item={items[i]} />);
                    }
                    return itemBoxes;
                    })()
                ) : (
                    <div>No items to display</div>
                )}
            </Box>
            {items.length > 0 && <PaginationSearch/>}
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

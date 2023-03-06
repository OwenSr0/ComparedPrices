import React, {useState, useEffect}  from "react";
import axios from 'axios';
import { Box } from '@mui/material';
import ProductHeader from './Product/index'
import ComparoSection from './ComparoS/index'
import { useLocation } from 'react-router-dom';



const ProductBody = () => {

    const[item, setItem] = useState([])
    const[items, setItems] = useState([])
    const[valid, setValid] = useState('')

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const platform = query.get('platform');
    const itemId = query.get('q');

    const getItem=async()=> {
        var reqs = {
            platform: platform,
            itemId: itemId,
        }
        axios.post('/api/searches/product', reqs)
        .then(res => {
            setItem(res.data[0]);
            if(res.data.length === 0){
                setValid('No se ha encontrado el producto');
            } else{
                setValid('')
            }
        })
        .then(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        console.log(itemId)
        if (itemId) {
            getItem();
        } else {
            setValid('');
        }
    },[])

    return(
        <Box sx={stackStyle}>
            <ProductHeader item={item} />
            <ComparoSection />
        </Box>
    )
}

export default ProductBody;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
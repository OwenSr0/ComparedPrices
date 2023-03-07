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
        try {
            const reqs0 = {
                platform: platform,
                itemId: itemId,
            };
            const res0 = await axios.post('/api/searches/product', reqs0);
            setItem(res0.data[0]);
            if (res0.data.length === 0) {
                return setValid('No se ha encontrado el producto');
            } else {
                setValid('');
            }
            const reqs1 = {
                title: res0.data[0].title,
                condition: res0.data[0].condition,
                attributes: res0.data[0].attributes
            }
            const res1 = await axios.post('/api/searches/comparo', reqs1);
            setItems(res1.data);
            console.log(res1.data)

    } catch (error) {
        console.log(error);
        setValid('No se ha encontrado el producto');
    }
    };

    useEffect(()=>{
        if (itemId) {
            getItem();
        } else {
            setValid('');
        }
    },[])

    return(
        <Box sx={stackStyle}>
            <ProductHeader item={item} />
            <ComparoSection item={item} items={items} />
        </Box>
    )
}

export default ProductBody;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
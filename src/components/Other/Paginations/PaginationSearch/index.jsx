import React from "react";
import { Box, Pagination } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';
import './index.css'

const PaginationSearch = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 6);
    const search = query.get('q');

    return(
        <Box sx={stackStyle}>
            <Pagination sx={stackBox}
                page={page}
                count={5}
                renderItem={(item) => (
                    <PaginationItem sx={stackItem}
                    component={Link}
                    to={`/search${search ? `?q=${search}` : ''}${item.page === 1 ? '' : `&page=${item.page}`}`}
                    {...item}
                    />
                )}
            />
        </Box>
    )
}



export default PaginationSearch;

const stackStyle = {
    display: 'flex',
}

const stackBox ={
    margin: {
        sm: '0 0 0 6vw',
        lg: '0 0 0 14vw',
        xl: '0 0 0 18vw'
    }
}

const stackItem = {
    color: "white"
}




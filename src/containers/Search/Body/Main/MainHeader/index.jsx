import React from "react";
import { Box, Container, Pagination } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';


const MainHeader = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 5);
    const search = query.get('q');

    return(
        <Container sx={stackStyle}>
            <Box>
            <Pagination
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
            <Box></Box>
        </Container>
    )
}



export default MainHeader;

const stackStyle = {
    display: 'flex',
}

const stackItem = {
    color: "white"
}




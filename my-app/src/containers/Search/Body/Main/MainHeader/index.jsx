import React from "react";
import { Box, Container, Pagination } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';

const MainHeader = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    return(
        <Container>
            <Box>
            <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                    <PaginationItem
                    component={Link}
                    to={`/search${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                    />
                )}
            />
            </Box>
            <Box>uwu</Box>
        </Container>
    )
}

export default MainHeader;




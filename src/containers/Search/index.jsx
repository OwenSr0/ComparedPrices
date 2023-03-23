import React from "react";
import { Box } from '@mui/material';
import SearchBody from './Body/index';
import FullHeader from '../../components/Header/FullHeader/index'
import FullFooter from'../../components/Footer/FullFooter/index';

const Search = () => {
    const title = "Buscador";
    return(
        <Box>
            <FullHeader title={title}/>
            <SearchBody />
            <FullFooter />
        </Box>
    )
}

export default Search;
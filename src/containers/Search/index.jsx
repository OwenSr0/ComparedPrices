import React from "react";
import { Box } from '@mui/material';
import SearchHeader from './Header/index';
import SearchBody from './Body/index';
import FullFooter from'../../components/Footer/FullFooter/index';

const Search = () => {
    return(
        <Box>
            <SearchHeader/>
            <SearchBody />
            <FullFooter />
        </Box>
    )
}

export default Search;
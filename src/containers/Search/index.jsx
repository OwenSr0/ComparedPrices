import React from "react";
import { Box } from '@mui/material';
import SearchHeader from './Header/index'
import SearchBody from './Body/index'

const Search = () => {
    return(
        <Box>
            <SearchHeader/>
            <SearchBody />
        </Box>
    )
}

export default Search;
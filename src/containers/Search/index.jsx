import React from "react";
import { Box } from '@mui/material';
import SearchBody from './Body/index';
import FullHeader from '../../components/Header/FullHeader/index'
import FullFooter from'../../components/Footer/FullFooter/index';

const Search = (props) => {
    const region = props.region;
    const title = "Buscador";
    return(
        <Box>
            <FullHeader title={title} region={region}/>
            <SearchBody region={region}/>
            <FullFooter region={region}/>
        </Box>
    )
}

export default Search;
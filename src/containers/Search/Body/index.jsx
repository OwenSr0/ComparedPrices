import React from "react";
import { Box } from "@mui/system";
import SearchSection from "./SearchSection";
import SearchMain from "./Main/index"

const SearchBody = (props) => {
    const region = props.region;

    return(
        <Box sx={stackStyle}>
            <SearchSection region={region}/>
            <SearchMain region={region}/>
        </Box>
    )
}

export default SearchBody;

const stackStyle = {
    marginTop: {
        xs: '2em',
        sm: '0'
    }
}
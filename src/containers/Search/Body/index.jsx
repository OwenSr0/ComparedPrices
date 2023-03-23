import React from "react";
import { Box } from "@mui/system";
import SearchSection from "./SearchSection";
import SearchMain from "./Main/index"

const SearchBody = () => {
    return(
        <Box sx={stackStyle}>
            <SearchSection />
            <SearchMain />
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
import React from "react";
import { Box } from "@mui/system";
import SearchSection from "./SearchSection";
import SearchMain from "./Main/index"

const SearchBody = () => {
    return(
        <Box>
            <SearchSection />
            <SearchMain />
        </Box>
    )
}

export default SearchBody;
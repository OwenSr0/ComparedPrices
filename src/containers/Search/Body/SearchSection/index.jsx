import React from "react";
import { Box } from "@mui/system";
import SortFilter from "./DropDown/Filter";
import SortOrder from "./DropDown/Order/index"
import AdvancedOptionsB from "../../../../components/Buttons/Search/Advanced/index"
import SearchTextField from "../../../../components/TextField/Search/index"
import AdvancedOptions from "./Advanced/index"

const SearchSection = () => {
    return(
        <Box>
            <SearchTextField />
            <Box sx={stackSort}>
                <SortFilter />
                <SortOrder />
                <AdvancedOptionsB />
            </Box>
            <AdvancedOptions />
        </Box>
    )
}

export default SearchSection;

const stackSort = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.5em'
}

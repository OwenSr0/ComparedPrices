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
                <Box sx={stackBox}>
                    <SortFilter />
                    <SortOrder />
                </Box>
                <AdvancedOptionsB />
            </Box>
            <AdvancedOptions />
        </Box>
    )
}

export default SearchSection;

const stackSort = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        lg: 'row'
    },
    justifyContent: 'center',
    alignItems: 'center',
    height: {
        xs: '8em',
        sm: '4em',
        lg: '2.5em'
    }
}

const stackBox = {
    display: 'flex'
}

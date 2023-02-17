import React from "react";
import { Box } from '@mui/material';

const NotFound = (props) => {
    const {
        valid
    } = props;
    return(
        <Box>
            {valid}
        </Box>
    )
}

export default NotFound;
import React from "react";
import { Box } from '@mui/material';

const ReHome = (props) => {
    const region = props.region
    window.location.assign(`${region}/`);
    return(
        <Box>
        </Box>
    )
}

export default ReHome;
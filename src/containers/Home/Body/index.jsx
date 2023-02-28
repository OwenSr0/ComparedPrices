import React from "react";
import { Box } from "@mui/system";
import TextFieldBody from "../../../components/TextField/Body";
import BoxHub from "./Hub/index"

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const BodyHome = () => {
    return(
        <Box sx={stackStyle}>
                <BoxHub/>
                <TextFieldBody/>
        </Box>
         
    )
}

export default BodyHome;
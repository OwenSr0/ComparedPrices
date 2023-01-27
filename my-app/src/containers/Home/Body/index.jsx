import React from "react";
import { Box } from "@mui/system";
import TextFieldBody from "../../../components/TextField/Body";
import BoxHub from "./Hub/index"

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const stackHub = {
    display: 'flex',
    justifyContent: 'center',
}

const stackText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


const BodyHome = () => {
    return(
        <Box sx={stackStyle}>
                <BoxHub/>
                <Box sx={stackText}><TextFieldBody/></Box>
        </Box>
         
    )
}

export default BodyHome;
import React from "react";
import { Box } from "@mui/system";
import TextFieldBody from "../../../components/TextField/Home/index";
import BoxHub from "./Hub/index"

const BodyHome = (props) => {
    const region = props.region;
    return(
        <Box sx={stackStyle}>
            <BoxHub/>
            <TextFieldBody region={region}/>
        </Box>
         
    )
}

export default BodyHome;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: {
        xs: "4em",
        sm: "10em",
        md: '12em',
        lg: '2em',
        xl: '3em'
    }
}
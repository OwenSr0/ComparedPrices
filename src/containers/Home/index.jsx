import React from "react";
import { Box } from "@mui/system";
import HomeHeader from './Header/index'
import BodyHome from './Body/index'

const Home = () => {

    return(
        <Box sx={stackStyle}>
            <HomeHeader />
            <BodyHome />

        </Box>
    )
}

export default Home;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',

}

import React from "react";
import { Box } from "@mui/system";
import DefaultHeader from '../../components/Header/index';
import BodyHome from './Body/index';
import FullFooter from'../../components/Footer/FullFooter/index';

const Home = () => {

    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <DefaultHeader />
                <BodyHome />
            </Box>
            
            <FullFooter />
        </Box>
    )
}

export default Home;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
}

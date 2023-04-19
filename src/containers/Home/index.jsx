import React from "react";
import { Box } from "@mui/system";
import DefaultHeader from '../../components/Header/index';
import BodyHome from './Body/index';
import FullFooter from'../../components/Footer/FullFooter/index';

const Home = (props) => {
    const region = props.region;
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <DefaultHeader region={region}/>
                <BodyHome region={region}/>
            </Box>
            <FullFooter region={region}/>
        </Box>
    )
}

export default Home;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: {
        xs: '85vh',
        sm: '100vh'
    }
}

const stackBox = {
    display: 'flex',
    flexDirection: 'column',
}

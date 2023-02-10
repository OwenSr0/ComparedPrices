import React from "react";
import { Container, Button } from '@mui/material';
import axios from "axios";

const Test = () => {

    function tests(){
        var cosa = {
            email: 'owen',
            uwu: '123'
        }
        axios.post('/api/user/test', cosa)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)})
    }
    
    return(
        <Container>
            <p>test</p>
            <Button onClick={tests}>click</Button>
        </Container>
    )
}

export default Test;
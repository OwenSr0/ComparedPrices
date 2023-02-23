const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/search', async (req, res) => {
    try {
        const search = req.body.search
        await axios.get(`https://jsonplaceholder.typicode.com/${search}`)
            .then(response=>{
                res.json(response.data)
            }).catch(err=>{
                console.log(err);
            })
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;
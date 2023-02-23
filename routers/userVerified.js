const express = require('express');
const router = express.Router();
const User = require('../routes/user.js');

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, number, userId, token } = req.body;
        const user = new User({ name, email, password, number, userId, token });
        console.log(user)
        await user.save();
        res.json(token)
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const isValid = await user.isValidPassword(password);
        if (!isValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }
        const token = await User.findOne({email}, "token")
        res.json(token)
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
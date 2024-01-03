const express = require('express')
const router = express.Router()
const User = require('../models/user_model')

router.post('/create', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = await User.create({ username, email, password })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
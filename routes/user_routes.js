const express = require('express')
const router = express.Router()
const User = require('../models/user_model')
const passport = require('passport')
const bcrypt = require('bcrypt')

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.post('/create', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({ username, email, password: hashedPassword })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
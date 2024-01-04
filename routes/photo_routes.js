const express = require('express')
const router = express.Router()
const { Photo } = require('../models/index_model')

router.post('/submit', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'User not authenticated'})
    }

    try {
        const { url, blogPostId } = req.body
        
        const newPhoto = await Photo.create({
            url: url,
            blogPostId: blogPostId || null
        })

        res.status(201).json(newPhoto)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
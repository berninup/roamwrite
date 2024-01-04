const express = require('express')
const router = express.Router()
const Blog_Post = require('../models/blog_post_model')


router.post('/create', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'User not authenticated'})
    }

    try {
        const { title, content } = req.body
        const userId = req.user.id

        const newPost = await Blog_Post.create({
            title: title,
            content: content,
            userId: userId
        })

        res.status(201).json(newPost)        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
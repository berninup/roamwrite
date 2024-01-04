const express = require('express')
const router = express.Router()
const { Blog_Post } = require('../models/index_model')


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


router.put('/update/:postId', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'User is not authenticated' })        
    }

    try {
        const { title, content } = req.body
        const postId = req.params.postId
        const userId = req.user.id

        const post = await Blog_Post.findOne({ where: { id: postId, userId: userId } })

        if (!post) {
            return res.status(404).json({ message: 'Blog post not found or not owned by user' })
        }

        post.title = title
        post.content = content
        await post.save()

        res.json({ message: 'Blog post udated successfully', post })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/posts', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'User not authenticated' })
    }

    try {
        const userId = req.session.passport.user        

        const blogPosts = await Blog_Post.findAll({
            where: { userId: userId }
        })
        res.json(blogPosts)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/posts/:blogPostId' , async (req, res) => {
    try {
        const blogPostId = req.params.blogPostId
        const blogPost = await Blog_Post.findByPk(blogPostId)

        res.json(blogPost)
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
})



module.exports = router
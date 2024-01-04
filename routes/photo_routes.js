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

router.get('/gallery', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'User not authenticated'})        
    }
    
    try {
        const userId = req.session.passport.user

        const userPhotos = await Photo.findAll({
            where: { userId: userId }
        })

        res.json(userPhotos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:photoId', async (req, res) => {
    try {
        const photoId = req.params.photoId
        const photo = await Photo.findByPk(photoId)
        
        res.json(photo)
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Photos = sequelize.define('photos', {
    photo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blog_post_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'blog_post',
            key: 'blog_post_id'
        }
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING
})

module.exports = Photo
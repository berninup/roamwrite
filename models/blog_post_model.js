const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Blog_Post = sequelize.define('blog_post', {
    blog_post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING
})

module.exports = Blog_Post
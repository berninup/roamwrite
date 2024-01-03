const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Comment = sequelize.define('comment', {
    comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.STRING,
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    blog_post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'blog_post',
            key: 'blog_post_id'
        }
    }
})

module.exports = Comment
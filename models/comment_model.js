const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Comment = sequelize.define('comment', {
    comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.STRING
})

module.exports = Comment
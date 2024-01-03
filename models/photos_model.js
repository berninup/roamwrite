const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Photos = sequelize.define('photos', {
    photo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports = Photos
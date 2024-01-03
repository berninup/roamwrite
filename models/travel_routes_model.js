const Sequelize = require('sequelize')
const sequelize = require('..db.js')

const Travel_Route = sequelize.define('travel_route', {
    travel_route_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Route_Data WIP
    route_data: {
        type: Sequelize.GEOMETRY('LINESTRING')
    }
})


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class TravelRoute extends Model {}

TravelRoute.init({
    
    route_data: {
        type: DataTypes.GEOMETRY('LINESTRING') 
    }    
}, {
    sequelize,
    modelName: 'travel_route',     
});

module.exports = TravelRoute;

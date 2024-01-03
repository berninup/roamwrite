const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Photo extends Model {}

Photo.init({
    
    blogPostId: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
            model: 'blog_posts', 
            key: 'id' 
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING        
    }    
}, {
    sequelize,
    modelName: 'photo',     
});

module.exports = Photo;

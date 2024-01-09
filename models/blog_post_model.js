const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); 

class BlogPost extends Model {}

BlogPost.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    content: {
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    photoUrl: {
        type: DataTypes.STRING,        
    },    
}, {
    sequelize, 
    modelName: 'blog_post',     
});

module.exports = BlogPost;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Make sure the path is correct

class BlogPost extends Model {}

BlogPost.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    content: {
        type: DataTypes.TEXT, 
        allowNull: false 
    }    
}, {
    sequelize, 
    modelName: 'blog_post',     
});

module.exports = BlogPost;

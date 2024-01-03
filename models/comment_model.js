const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); 

class Comment extends Model {}

Comment.init({
    
    content: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', 
            key: 'id'     
        }
    },
    blogPostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blog_posts', 
            key: 'id'            
        }
    }
    
}, {
    sequelize,
    modelName: 'comment', 
});

module.exports = Comment;

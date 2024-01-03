const { Model, DataTypes } = require('sequelize');
const sequelize = require('..db.js'); 

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
            model: 'user', 
            key: 'user_id'     
        }
    },
    blogPostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blog_post', 
            key: 'blog_post_id'            
        }
    }
    
}, {
    sequelize,
    modelName: 'comment', 
});

module.exports = Comment;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('..db.js');

class Photo extends Model {}

Photo.init({
    
    blogPostId: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
            model: 'blog_post', 
            key: 'blog_post_id' 
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

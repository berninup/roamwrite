const User = require('./user_model')
const Blog_Post = require('./blog_post_model')
const Comment = require('./comment_model')
const Photo = require('./photo_model')
const Travel_Route = require('./travel_routes_model')

const sequelize = require('../db')

User.hasMany(Blog_Post)
Blog_Post.belongsTo(User)

User.hasMany(Photo)
Photo.belongsTo(User)

User.hasMany(Travel_Route)
Travel_Route.belongsTo(User)

User.hasMany(Comment, { foreignKey: 'user_id' })
Blog_Post.hasMany(Comment, { foreignKey: 'blog_post_id' })

Comment.belongsTo(User, { foreignKey: 'user_id '})
Comment.belongsTo(Blog_Post, { foreignKey: 'blog_post_id '})

Photo.belongsTo(Blog_Post, {
    foreignKey: 'blog_post_id',
    as: 'blog_post_model',
    allowNull: true
})
Blog_Post.hasMany(Photo, {
    foreignKey: 'blog_post_id',
    as: "photo_model"
})

module.exports = {
    User,
    Blog_Post,
    Comment,
    Photo,
    Travel_Route
}
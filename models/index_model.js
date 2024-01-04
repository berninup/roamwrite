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

User.hasMany(Comment)
Blog_Post.hasMany(Comment)

Comment.belongsTo(User)
Comment.belongsTo(Blog_Post)

Photo.belongsTo(Blog_Post)
Blog_Post.hasMany(Photo)

module.exports = {
    User,
    Blog_Post,
    Comment,
    Photo,
    Travel_Route,
    sequelize
}
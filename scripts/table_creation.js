const sequelize = require('../db')
const  { User, Comment, Travel_Route, Blog_Post } = require('../models/index_model')


sequelize.sync({ force: false })
    .then(() => {
        console.log("All tables have been created")
    }).catch(error => {
        console.error("Error creating table", error);
        process.exit(1)
    })
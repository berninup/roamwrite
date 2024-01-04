const express = require('express')
const session = require('express-session')
const passport = require('passport')
const userRoutes = require('./routes/user_routes')
const blogRoutes = require('./routes/blog_routes')
const photoRoutes = require('./routes/photo_routes')


const app = express()
app.use(express.json())

const initializePassport = require('./config/passport-config')
initializePassport(passport)

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/users', userRoutes)
app.use('/blog', blogRoutes)
app.use('/photo', photoRoutes)

app.listen(3000, () => {
    console.log('Server is running')
})

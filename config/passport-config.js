const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const User = require('../models/user_model')

function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await User.findOne({ where: {email: email }})
        if (user == null) {
            return done(null, false, {message: 'No user with that email'})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)                
            } else {
                return done(null, false, {message: "Password Incorrect"})
            }
            
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email' } , authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        return done(null, await User.findByPk(id))
    })
}

module.exports = initialize

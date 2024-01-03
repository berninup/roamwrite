const express = require('express')
const userRoutes = require('./routes/user_routes')

const app = express()
app.use(express.json())

app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log('Server is running')
})

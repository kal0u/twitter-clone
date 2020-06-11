const express = require('express')
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const users = require ('./routes/users')
const posts = require ('./routes/posts')


// setup env
dotenv.config()

//mongoDB
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/posts', posts)
// run app
const PORT = process.env.PORT || 5000
app.listen(5000,() => console.log(`server is running on port ${PORT}`))

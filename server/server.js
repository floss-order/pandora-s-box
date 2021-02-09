const express = require('express')
const app = express()
const db = require('./db')
const chalk = require('chalk')
const errorHandler = require('./middleware/errorHandler')
const morgan = require('morgan')

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

app.use(express.static('public'))
app.use(express.json())
app.use(morgan('dev'))

// Routes list
const signUpRouter = require('./routes/signup')
app.use('/signup', signUpRouter)

// Middleware
app.use(errorHandler)

// Start the server on successfull auth
db.authenticate()
.then(() => {
    console.log(chalk.yellow('Successfully connected to the database'))

    app.listen(process.env.PORT, () => {
        console.log(chalk.blue(`Server is running on http://localhost:${process.env.PORT}`))
    })
})
.catch(error => {
    if(error) throw error
})
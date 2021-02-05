const express = require('express')
const app = express()
const db = require('./db')
const chalk = require('chalk')

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

app.use(express.static('public'))
app.use(express.json())

// Routes list
const signUpRouter = require('./routes/signup')
app.use('/signup', signUpRouter)

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
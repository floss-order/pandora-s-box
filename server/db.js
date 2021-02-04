const { Sequelize } = require('sequelize')
const path = require('path')

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})

module.exports = sequelize
const db = require('../db')
const { DataTypes } = require('sequelize')

// Maximum possible email length is 254 characters
const EMAIL_MAX_LENGTH = 254
 
const User = db.define('User', {
    email: {
        type: DataTypes.STRING(EMAIL_MAX_LENGTH),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User
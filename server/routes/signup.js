const express = require('express')
const router = express.Router()
const User = require('../models/User')
const formValidation = require('../formValidation')

router.post('/', async (req, res, next) => {
    try {
        await formValidation.signUpSchema.validate(req.body)
        
        const { email, password } = req.body
        User.create({ email, password })

        res.status(201)
    } catch (error) {
        if(error instanceof ValidationError) {
            res.status(400).json(error)
        } else {
            next(error)
        }
    }
})

module.exports = router
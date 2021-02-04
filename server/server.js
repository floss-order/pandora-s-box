const express = require('express')
const app = express()

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

app.use(express.static('public'))
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})
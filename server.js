const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const profile = require('./profile')
app.use('/api/profile', profile)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port: ${port}`))

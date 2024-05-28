const express = require('express')
const db = require('./db')
const bodyParser = require(`body-parser`)
const logger = require(`morgan`)
const PORT = process.env.PORT || 3001

const app = express()
app.use(logger(`dev`))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
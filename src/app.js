const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds231740.mlab.com:31740/express-api-demo')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/peoples', require('./routes/beers.routes'))

module.exports = app
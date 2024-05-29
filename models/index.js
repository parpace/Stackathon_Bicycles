const mongoose = require('mongoose')
const brandSchema = require('./brand')
const bicycleSchema = require('./bicycle')
const bellSchema = require('./bell')

//convert schema to model with the same name

const Brand = mongoose.model('Brand', brandSchema)
const Bicycle = mongoose.model('Bicycle', bicycleSchema)
const Bell = mongoose.model('Bell', bellSchema)

module.exports = {
    Brand,
    Bicycle,
    Bell
  }

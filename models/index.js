const mongoose = require('mongoose')
const brandSchema = require('./brand')
const bicycleSchema = require('./bicycle')

//convert schema to model with the same name

const Brand = mongoose.model('Brand', brandSchema)
const Bicycle = mongoose.model('Bicycle', bicycleSchema)

module.exports = {
    Brand,
    Bicycle,
  }

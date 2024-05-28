const mongoose = require('mongoose')

mongoose
    //for Will and Sebastian
    .connect('mongodb://127.0.0.1:27017/bicycleDatabase')
    //especially for Parker 
    // .connect(`mongodb+srv://parpace:tyghbn11@student-cluster.ta01bhl.mongodb.net/?retryWrites=true&w=majority&appName=student-cluster`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
      })
      .catch((e) => console.error('Connection error', e.message))

mongoose.set('debug',true)

//from here on in, whenever we use the variable 'db' it refers to the connection to Mongo that we've made here
const db = mongoose.connection

//we are exporting our `db` variable and all of its associated info, so that it can be required and imported into other files in our app
module.exports = db


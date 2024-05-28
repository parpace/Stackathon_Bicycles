const { Schema } = require('mongoose')

const brandSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        logo_img: {type: String, required: true},
    },
    {timestamps: true}

)


module.exports = brandSchema
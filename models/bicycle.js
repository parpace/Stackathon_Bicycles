const { Schema } = require('mongoose')

const bicycleSchema = new Schema(
    {
        brand_id: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
        type: {type: String, required: true},
        price: {type: Number, required: true},
        color: {type: String, required: true},
        img: {type: String, required: false}
    },
    {timestamps: true}

)


module.exports = bicycleSchema
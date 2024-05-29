const { Schema } = require('mongoose')

const bellSchema = new Schema(
    {
        bicycle_id: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },
        sound: {type: String, required: true},
        price: {type: Number, required: true}
    },
    {timestamps: true}

)


module.exports = bellSchema
const { Bell } = require('../models')

const getAllBells = async (req, res) => {
    try {
        const objectArray = await Bell.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
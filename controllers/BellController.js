const { Bell } = require('../models')

const getAllBells = async (req, res) => {
    try {
        const objectArray = await Bell.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getBellById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Bell.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Bicycle doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createBell = async (req, res) => {
    try {
        const newObject = await new Bell(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Bicycle doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllBells,
    getBellById,
    createBell
}
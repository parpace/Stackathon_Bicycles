const {Brand} = require('../models');

//Read
const getAllBrands = async (req, res) => {
    try {
        const objectArray = await Brand.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//Read
const getBrandById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Brand.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Brand doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Brand doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

//create
const createBrand = async (req, res) => {
    try {
        const newObject = await new Brand(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Brand doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

//update
const updateBrand = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Brand not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Brand doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

//delete
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Brand.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Brand deleted");
        }
        throw new Error("Brand not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Brand doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllBrands, 
    getBrandById, 
    createBrand, 
    updateBrand, 
    deleteBrand
}
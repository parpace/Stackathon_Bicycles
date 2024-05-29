const express = require('express')
const db = require('./db')
const cors = require('cors');
const bodyParser = require(`body-parser`)
const logger = require(`morgan`)
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(logger(`dev`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

///////////////

const BrandController = require('./controllers/BrandController')
// const BicycleController = require('./controllers/BicycleController')
// const BellController = require('./controllers/BellController')


app.get('/', (req, res) => res.send('This is our landing page!'))


app.get('/brands', BrandController.getAllBrands)
// app.get('/bicycles', BicycleController.getAllBicycles)
// app.get('/bells', BellController.getAllBells)

app.get('/brands/:id', BrandController.getBrandById)
// app.get('/bicycles/:id', BicycleController.getBicycleById)
// app.get('/bells/:id', BellController.getBellById)

//create
app.post('/brands', BrandController.createBrand)
// app.post('/bicycles', BicycleController.createBicycle)
// app.post('/bells', BellController.createBell)

//update
app.put('/brands/:id', BrandController.updateBrand)
// app.put('/bicycles/:id', BicycleController.updateBicycle)
// app.put('/bells/:id', BellController.updateBell)

//delete
app.delete('/brands/:id', BrandController.deleteBrand)
// app.delete('/bicycles/:id', BicycleController.deleteBicycle)
// app.delete('/bells/:id', BellController.deleteBell)


//catch all
app.get('*', (req, res) => res.send('404 page not found'))

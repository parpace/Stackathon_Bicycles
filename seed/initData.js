const db = require('../db')
const { Brand, Bicycle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Brand.deleteMany({});
        await Bicycle.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {

    await resetCollections();   

  const brand1 = await new Brand({
    name: 'BMX',
    location: '123 Main St, Orlando, FL',
    logo_img: 'bike.png'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'MTB',
    location: '123 Main St, Orlando, FL',
    logo_img: 'bike.png'
  })
  brand2.save()

  const bicycleArray = [
    {
      brand_id: brand1._id,
      type: 'Mountain Bike',
      price: 130,
      color: 'red',
    },
    {
        brand_id: brand1._id,
        type: 'Aqua Bike',
        price: 250,
        color: 'blue',
    },
    {
        brand_id: brand2._id,
        type: 'Desert Bike',
        price: 300,
        color: 'beige',
    },
    {
        brand_id: brand2._id,
        type: 'Snow Bike',
        price: 500,
        color: 'white',
    },
  ]

  await Bicycle.insertMany(bicycleArray)
  // const bicycles = await Bicycle.insertMany(bicycleArray)
  console.log('Created bicyles!')
  

}

const run = async () => {
  await main()
  db.close()
}

run()
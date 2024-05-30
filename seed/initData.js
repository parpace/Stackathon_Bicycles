const db = require('../db')
const { Brand, Bicycle, Bell } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Brand.deleteMany({});
        await Bicycle.deleteMany({});
        await Bell.deleteMany({});
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
    logo_img: 'bikesDB/BMX.jpeg'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'MTB',
    location: '123 Main St, Orlando, FL',
    logo_img: 'bikesDB/MTB.jpeg'
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Sebs Cycles',
    location: '1705 Main St, Austin, TX',
    logo_img: 'bikesDB/sebsCycles.jpeg'
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'Parkers Projects',
    location: '1404 Far Away St, Detroit, MI',
    logo_img: 'bikesDB/parkersProjects.jpeg'
  })
  brand4.save()

  const brand5 = await new Brand({
    name: 'Wills Wheels',
    location: '1404 6th St, Austin, TX',
    logo_img: 'bikesDB/willsWheels.jpg'
  })
  brand5.save()



  const bicycleArray = [
    {
      brand_id: brand1._id,
      type: 'Mountain Bike',
      price: 130,
      color: 'red',
      img: 'bikesDB/redMTB.jpeg'
    },
    {
        brand_id: brand1._id,
        type: 'Aqua Bike',
        price: 250,
        color: 'blue',
        img: 'bikesDB/aquabike.jpeg'
    },
    {
        brand_id: brand2._id,
        type: 'Desert Bike',
        price: 300,
        color: 'beige',
        img: 'bikesDB/desertBike.jpeg'
    },
    {
        brand_id: brand2._id,
        type: 'Snow Bike',
        price: 500,
        color: 'black and red',
        img: 'bikesDB/snowBike.jpeg'
    },
    {
      brand_id: brand3._id,
      type: 'Racing Bike',
      price: 750,
      color: 'yellow',
      img: 'bikesDB/yellow.jpeg'
    },
    {
      brand_id: brand3._id,
      type: 'Downhill Mountain Bike',
      price: 800,
      color: 'black',
      img: 'bikesDB/downhillMTB.jpeg'
    },
    {
      brand_id: brand3._id,
      type: 'Fat Tire Beach Bike',
      price: 600,
      color: 'baby blue',
      img: 'bikesDB/beachBike.jpeg'
    },
    {
      brand_id: brand4._id,
      type: 'Parkers E-Bike',
      price: 1300,
      color: 'orange',
      img: 'bikesDB/orangeEbike.jpeg'
    },
    {
      brand_id: brand4._id,
      type: 'Parkers E-Scooter',
      price: 1100,
      color: 'candy red',
      img: 'bikesDB/redScooter.jpeg'
    },
    {
      brand_id: brand4._id,
      type: 'Parkers Electric Beach Bike',
      price: 1500,
      color: 'black & baby blue',
      img: 'bikesDB/EBeachBike.jpeg'
    },
    {
      brand_id: brand5._id,
      type: 'Wills 100cc Motorized Bike',
      price: 1400,
      color: 'cool grey',
      img: 'bikesDB/100ccWillBike.jpeg'
    },
    {
      brand_id: brand5._id,
      type: 'Wills One Wheel',
      price: 800,
      color: 'black & green',
      img: 'bikesDB/willsOneWheel.jpeg'
    },
    {
      brand_id: brand5._id,
      type: 'Wills BMX Bike',
      price: 1000,
      color: 'rainbow titanium',
      img: 'bikesDB/rainbowBMX.jpeg'
    },
  ]

  // await Bicycle.insertMany(bicycleArray)
  const bicycles = await Bicycle.insertMany(bicycleArray)
  console.log('Created bicycles!')
  

    
  const bellArray  = [
        {
          // bicycle_id: bicycleArray[0]._id,
          bicycle_id: bicycles[0]._id,
          sound: "trill",
          price: 4
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "honk",
          price: 15
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ring",
          price: 7
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ring",
          price: 7
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ding",
          price: 5
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ding",
          price: 5
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "dong",
          price: 4
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "dong",
          price: 4
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ding",
          price: 5
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "ding",
          price: 5
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "honk",
          price: 15
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "trill",
          price: 4
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "honk",
          price: 15
        },
    ]
    
    // bicycleArray.save()
    // bellArray.save()

    await Bell.insertMany(bellArray)
    console.log('Created bells!')
}

const run = async () => {
  await main()
  db.close()
}

run()
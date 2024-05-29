let button = document.querySelector(`#searchButton`)
let container = document.querySelector(`.container`)
const bicycleTypeArray = []
const bicyclePriceArray = []
const bicycleColorArray = []

const fetchBrand = async (brandID) => {
    try {
        let brand = await axios.get(`http://localhost:3001/brands/${brandID}`)

        const brandName = document.querySelector(`brand`)
        brandName.innerText = brand.data.name
    } catch (error) {
        console.error(`Error fetching actor with ID ${brandID}:`, error)
    }
}
// remember the brand name or ID from the card clicked on previous page

// add event listener for DOM content loading
document.addEventListener('DOMContentLoaded', async ()=> {
    let initialBicycleArray = []
    try {
      // console.log(actorID);
      let response = await axios.get(`http://localhost:3001/bicycles`)
      console.log(response.data)
      initialBicycleArray = response.data

      const bicycleArray = initialBicycleArray.filter(bike => bike.brand_id == '66574e2ea1a5208fd92248a8')
      console.log(bicycleArray)
      
      for (const bicycleObject of bicycleArray) {
      const newBikeContainer = document.createElement(`div`)
      newBikeContainer.classList.add(`bikeContainer`)
      const newBikeType = document.createElement(`div`)
      newBikeType.classList.add(`type`)
      const newBikePrice = document.createElement(`div`)
      newBikePrice.classList.add(`price`)
      const newBikeColor = document.createElement(`div`)
      newBikeColor.classList.add(`color`)

      container.appendChild(newBikeContainer)
      newBikeContainer.appendChild(newBikeType)
      newBikeContainer.appendChild(newBikeColor)
      newBikeContainer.appendChild(newBikePrice)

      
      newBikeType.innerText = bicycleObject.type
      newBikePrice.innerText = bicycleObject.price
      newBikeColor.innerText = bicycleObject.color

      bicycleTypeArray.push(bicycleObject.type)
      bicyclePriceArray.push(bicycleObject.price)
      bicycleColorArray.push(bicycleObject.color)
      }
    } catch (error) {
      console.error(`Error fetching bicycles`, error)
    }
})

button.addEventListener(`click`, async ()=> {
    let input = document.querySelector(`#inputBar`).value

    
})
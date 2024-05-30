// add event listener for DOM content loading
document.addEventListener('DOMContentLoaded', async ()=> {
    let initialBicycleArray = []
    let bicycleArray = []
    const bicycleTypeArray = []
    const bicyclePriceArray = []
    const bicycleColorArray = []
    const container = document.querySelector('.container')
    const dropdownMenu = document.getElementById('bikeDropdown')

    // Obtain brandID from whichever brand was clicked on previous page
    const idCopy = localStorage.getItem('brandID')
    const nameCopy = localStorage.getItem('brandName')
    if (idCopy) {
        const brandName = document.querySelector('#brandName')
        brandName.innerText = nameCopy
    }

    // Populate the bicycles of a specified brandID
    try {
      // console.log(actorID);
      let response = await axios.get(`http://localhost:3001/bicycles`)
      console.log(response.data)
      initialBicycleArray = response.data

      bicycleArray = initialBicycleArray.filter(bike => bike.brand_id === idCopy)
      console.log(bicycleArray)
      
      for (const bicycleObject of bicycleArray) {
        const newBikeContainer = document.createElement(`div`)
        newBikeContainer.classList.add(`bikeContainer`)
        const newImage = document.createElement('img')
        newImage.classList.add('brand-logo')
        const newBikeType = document.createElement(`div`)
        newBikeType.classList.add(`type`)
        const newBikePrice = document.createElement(`div`)
        newBikePrice.classList.add(`price`)
        const newBikeColor = document.createElement(`div`)
        newBikeColor.classList.add(`color`)

        container.appendChild(newBikeContainer)
        newBikeContainer.appendChild(newImage)
        newBikeContainer.appendChild(newBikeType)
        newBikeContainer.appendChild(newBikePrice)
        newBikeContainer.appendChild(newBikeColor)

        newImage.setAttribute('src',bicycleObject.img)
        console.log(bicycleObject.logo_img)

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


    // I want to create a function that checks to see if the value entered into bicycleSearch is equivalent to one of the types of bicycles in our bicycleArray. If the answer is yes, I want the function to make the bicycle content appear, and update values for type, price and color.
    // const button = document.querySelector('#searchButton')
    // button.addEventListener('click', searchBicycle)

    // function searchBicycle() {
    //     const input = document.querySelector('#inputBar').value.toLowerCase()
    //     const filteredBicycles = bicycleArray.filter(bike => bike.type.toLowerCase() === input)

    //     clearContent()
    //     updateBicycles(filteredBicycles)
    // }

    document.getElementById('bikeDropdown').addEventListener('change', function() {
        console.log('Selected bike:', this.value);
    const input = this.value.toLowerCase()
    const filteredBicycles = bicycleArray.filter(bike => bike.type.toLowerCase() === input)

    clearContent()
    updateBicycles(filteredBicycles)
    })

    function updateBicycles(bicycles) {
        bicycles.forEach(bike => {
            const newBikeContainer = document.createElement('div')
            newBikeContainer.classList.add('bikeContainer')
            const newImage = document.createElement('img')
            newImage.classList.add('brand-logo')
            const newBikeType = document.createElement('div')
            newBikeType.classList.add('type')
            const newBikeColor = document.createElement('div')
            newBikeColor.classList.add('color')
            const newBikePrice = document.createElement('div')
            newBikePrice.classList.add('price')

            container.appendChild(newBikeContainer)
            newBikeContainer.appendChild(newImage)
            newBikeContainer.appendChild(newBikeType)
            newBikeContainer.appendChild(newBikePrice)
            newBikeContainer.appendChild(newBikeColor)

            newImage.setAttribute('src',bike.img)

            newBikeType.innerText = bike.type
            newBikePrice.innerText = bike.price
            newBikeColor.innerText = bike.color
        })
        container.style.display = 'block'
    }

    /*-------------------------------------- Dropdown Menu ----------------------------------------*/

    function updateDropdownMenu(bicycles) {
        dropdownMenu.innerHTML = '' 

        // const option = document.querySelector(`#bikeDropdown option[value='']`)
        // // option.setAttribute(`value`,``)
        // option.setAttribute(`disabled`,true)
        // option.setAttribute(`selected`,true)

        bicycles.forEach(bike => {
            console.log(bicycles)
            const option = document.createElement('option')
            // option.href = '#'
            option.setAttribute(`value`,bike.type)
            option.innerText = bike.type
            dropdownMenu.appendChild(option)
        })
    }
    updateDropdownMenu(bicycleArray)


    // const arrow = document.querySelector(`.arrow`)

    // Make the dropdownMenu style go away if it was visible when the arrow is clicked, or appear if it was not visible when the arrow was clicked.
    // arrow.addEventListener(`click`, function() {
    //     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'
    // })

    // When someone clicks outside of the dropdownMenu area, make it dissapear.
    // document.addEventListener('click', function(event) {
    //     if (!arrow.contains(event.target) && !dropdownMenu.contains(event.target)) {
    //         dropdownMenu.style.display = 'none'
    //         }
    // }) 

    function clearContent() {
        container.innerHTML = ''
    }
})



// remember the brand name or ID from the card clicked on previous page
// const fetchBrand = async (brandID) => {
//     try {
//         let brand = await axios.get(`http://localhost:3001/brands/${brandID}`)

//         const brandName = document.querySelector(`brand`)
//         brandName.innerText = brand.data.name
//     } catch (error) {
//         console.error(`Error fetching actor with ID ${brandID}:`, error)
//     }
// }
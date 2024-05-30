let button = document.querySelector("#searchButton")

let container = document.querySelector("#container")
let cards = document.querySelectorAll(".card")

let brandNameArray = []
let brandLowerNameArray = []
let brandIDArray = []



document.addEventListener('DOMContentLoaded', async ()=> {
    refresh()
})

button.addEventListener('click', () => {
    refresh()
})

async function refresh() {
    
let brandArray = []
container.innerHTML = ""
  try {
    // let response = await axios.get(`http://localhost:3001/brands/${input}`);
    let response = await axios.get(`http://localhost:3001/brands`);
    // console.log(response.data); // Log the data received from the API
    
    brandArray = response.data //assuming it's an array
    // console.log(brandArray)
        
    for (const brandObject of brandArray) {

        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('id',brandObject._id)

        const newImage = document.createElement('img');
        newImage.classList.add('brand-logo')
        // console.log(brandObject.logo_img)
        newImage.setAttribute('src',brandObject.logo_img)

        const newName = document.createElement('div');
        newName.classList.add('brand-name')
        newName.innerText = brandObject.name
        
        newCard.appendChild(newImage)
        newCard.appendChild(newName)

        // const newBicycleLink = document.createElement('a');
        // newBicycleLink.href = 'parkerBicycle.html';
        // newBicycleLink.target = '_blank'; 
        // newBicycleLink.appendChild(newCard);
        
        container.appendChild(newCard);

        brandNameArray.push(brandObject.name)
        brandLowerNameArray.push(brandObject.name.toLowerCase())
        brandIDArray.push(brandObject._id)
    }
    
    // console.log(brandLowerNameArray)
    // console.log(brandIDArray)
    cards = document.querySelectorAll(".card")
    // console.log(cards)
    
    
    cards.forEach(function(card) {
      card.addEventListener('click', function() {    
        // idCopy = card.querySelector('.brand-name').innerText
        idCopy = card.getAttribute('id')
        nameCopy = brandNameArray[brandIDArray.indexOf(idCopy)]
        localStorage.setItem('brandID', idCopy);
        localStorage.setItem('brandName', nameCopy);
        console.log(idCopy)
        console.log(nameCopy)
        window.open('indexBicycle.html', '_blank');
      });
    });
    
    let input = document.querySelector("#inputBar").value.toLowerCase()
    if (input == ``) { return }
    if (!brandLowerNameArray.includes(input)) {return}
    cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        if (card.querySelector('.brand-name').innerText.toLowerCase()
            !== input) {
            // console.log(brandNameArray)
            container.removeChild(card)
        }
    })
    console.log(brandArray)

} catch (error) {
    console.error('Error fetching data:', error);  
}
}
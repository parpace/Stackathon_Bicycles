let button = document.querySelector("#searchButton")

let container = document.querySelector("#container")
let cards = document.querySelectorAll(".card")

let brandNameArray = []
// let brandLogoArray = []
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

        const newName = document.createElement('h2');
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
        // brandLogoArray.push(brandObject.logo_img)
        brandIDArray.push(brandObject._id)
        
    }
    
    // console.log(brandLogoArray)
    // console.log(brandIDArray)
    cards = document.querySelectorAll(".card")
    // console.log(cards)
    
    
    cards.forEach(function(card) {
      card.addEventListener('click', function() {    
        // idCopy = card.querySelector('.brand-name').innerText
        idCopy = card.getAttribute('id')
        localStorage.setItem('brandID', idCopy);
        // console.log(idCopy)
        window.open('parkerBicycle.html', '_blank');
      });
    });
    
    let input = document.querySelector("#inputBar").value
    if (input == ``) { return }
    if (!brandNameArray.includes(input)) {return}
    cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        if (card.querySelector('.brand-name').innerText !== input) {
            // console.log(brandNameArray)
            container.removeChild(card)
        }
    })
    console.log(brandArray)

} catch (error) {
    console.error('Error fetching data:', error);  
}
}
const burgersList = document.getElementById('burgers-list')
console.log(burgersList)

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerToBurgersList)
})

function addBurgerToBurgersList(burger) {
    const liElement = document.createElement('li')
    const nameElement = document.createElement('h3')
    nameElement.textContent = `name ${burger.name}`;

    const imageElement = document.createElement('img')
    imageElement.src = burger.image

    const priceElement = document.createElement('h3');
    priceElement.textContent = burgersList.price;

    liElement.appendChild(nameElement)
    burgersList.appendChild(liElement)
    liElement.appendChild(imageElement)
}
console.log('%c HI', 'color: firebrick')
const imgURL = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breeds = document.getElementById('dog-breeds')
const dog = document.getElementById('dog-image-container');
const filter = document.getElementById('breed-dropdown')


function getDogImage(){
fetch(imgURL)
.then(res => res.json())
.then(json => renderDog(json.message))
}
function renderDog(dogs) {
  dogs.forEach(image => {
    let img = document.createElement("img")
    img.src = image
    dog.appendChild(img)
  })
}
function getDogsBreeds(){
fetch(breedUrl)
.then(res => res.json())
.then(json => renderDogBreed(json.message))
}

function renderDogBreed(dogsBreeds) {
  Object.keys(dogsBreeds).forEach(breed => {
    let li = document.createElement("li")
    li.textContent = breed
    li.addEventListener('click', () => {
    li.classList.add("colorChange")})
    console.log(li)

    breeds.appendChild(li)
  })
}
function reGetDogsBreeds(){
fetch(breedUrl)
.then(res => res.json())
.then(json => reRenderDogBreed(json.message))
}

function reGetDogsBreeds(){
fetch(breedUrl)
.then(res => res.json())
.then(json => reRenderDogBreed(json.message))
}

function reRenderDogBreed(dogBreeds) {
  Object.keys(dogBreeds).forEach(breed => {
    let li = document.createElement("li")
    let filterValue = filter.value
    li.textContent = breed
    if (li.textContent.charAt(0) === filterValue){
    li.addEventListener('click', () => {
    li.classList.add("colorChange")
    })
    breeds.appendChild(li)}
    })
  }

filter.addEventListener('mouseout', () => {
  clearDogs()
  reGetDogsBreeds()
})

function clearDogs() {
  let ul = document.getElementById('dog-breeds')
  while (ul.firstChild) {
    ul.firstChild.remove()
  }
}



getDogsBreeds()
getDogImage()

console.log('%c HI', 'color: firebrick')
let Url = "https://dog.ceo/api/breeds/image/random/4"
let BreedUrl = 'https://dog.ceo/api/breeds/list/all'
const filter = document.getElementById('breed-dropdown')

function fetchBreed(){
  fetch(BreedUrl)
      .then( res => res.json() )
      .then( json => displayBreeds(json.message) )
}

function fetchData(){
  fetch(Url)
      .then( res => res.json() )
      .then( json => displayImage(json.message) )
}

function filterBreeds(filterValue, breedArray) {
  let list = document.getElementById("dog-breeds")

  breedArray.forEach(breed => {
    let li = document.createElement("li")
    li.textContent = breed
    li.addEventListener("click", () => {
      li.classList.add("colorChange")
    })
    if (li.textContent.charAt(0) === filterValue) {
      list.appendChild(li)
    }
  })
}


function displayImage (images) {
  let div = document.getElementById("dog-image-container")
  images.forEach(image => {
    let img = document.createElement("img")
    img.src = image
    div.appendChild(img)
  })
}

function displayBreeds (breeds){
  let breedArray = Object.keys(breeds)
  let list = document.getElementById("dog-breeds")
  let filterValue = filter.value

  filter.addEventListener("change", filterBreeds(filterValue, breedArray))

  breedArray.forEach(breed => {
    let li = document.createElement("li")
    li.textContent = breed
    li.addEventListener("click", () => {
      li.classList.add("colorChange")
    })
    list.appendChild(li)
  })
}

fetchBreed()
fetchData()

console.log('%c HI', 'color: firebrick')
const ImgURL = "https://dog.ceo/api/breeds/image/random/4"
const BreedURL = 'https://dog.ceo/api/breeds/list/all'

function init() {
  fetchImages()
  fetchBreed()
}

function fetchImages() {
  fetch(ImgURL)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
}

function fetchBreed() {
  fetch(BreedURL)
    .then(resp => resp.json())
    .then(json => listBreed(json.message));
}

function renderImages(images) {
  let div = document.getElementById("dog-image-container")
  images.forEach(image => {
    let img = document.createElement('img')
    img.src = image
    div.appendChild(img)
  })
}


function listBreed(breeds) {
  const list = document.getElementById("dog-breeds")
  Object.keys(breeds).forEach(breed => {
    let li = document.createElement('li')
    li.textContent = breed
    li.addEventListener('click', () => {
      li.classList.add('colorChange')
    })

    list.appendChild(li)

    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', (ev) => {
      [].slice.call(list.children).forEach((breed)=> {
        if(breed.textContent.startsWith(ev.target.value)){
          breed.classList.remove('hidden')
        }
        else {
          breed.classList.add('hidden')
        }
      })
    })
  })
}


init()

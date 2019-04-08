// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  fetchBreeds();
  filter();
  // console.log(images);
});

function fetchImages(){
  fetch(imgUrl)
  .then( response => response.json())
  .then( data => {
    // console.log(data)
    // json.mesage[i]
    // console.log(data.message[0])
    let div = document.getElementById("dog-image-container")
    let imgUrls = data.message
    // console.log(imgUrls)
    imgUrls.forEach( function (imgUrl) {
      let img = document.createElement('img')
      img.src = imgUrl;
      div.appendChild(img)
    })
  })
}

function fetchBreeds(){
  fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    let ul = document.getElementById("dog-breeds")
    let breeds = Object.keys(data.message)
    // console.log(Object.keys(data.message))
    // console.log(ul)
    breeds.forEach(function (breed) {
      // console.log(breed)
      let li = document.createElement('li')
      li.textContent = breed
      li.addEventListener('click', () => {
        li.style.color = "purple"
      })
      ul.appendChild(li)
    })
  })
}

function filter(){
  const dropdown = document.getElementById("breed-dropdown")
  // console.log(dropdown)
  let breeds = document.getElementById("dog-breeds")
  // console.log(breeds)
  dropdown.addEventListener('change', (e) => {
    [].slice.call(breeds.children).forEach((breed) => {
      if (breed.textContent.startsWith(e.target.value)){
        breed.hidden = false;
      }
      else {
        breed.hidden = true;
      }
    })
  })
  displayFilteredDogs()
}

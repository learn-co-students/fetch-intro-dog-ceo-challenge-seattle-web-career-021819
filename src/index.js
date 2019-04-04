console.log('%c HI', 'color: firebrick')

// DISPLAY PICS
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogDiv = document.getElementById('dog-image-container')

fetch(imgUrl)
.then(resp => resp.json())
.then(data => {
  let images = data.message

  for (let i = 0; i < images.length; i++) {
    let image = document.createElement('img')
    image.src = images[i]
    dogDiv.appendChild(image)
  }
});

// DISPLAY BREED
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById('dog-breeds')

fetch(breedUrl)
.then(resp => resp.json())
.then(data => {
  const breeds = data.message
  const breedsKeys = Object.keys(breeds)

  for (let i = 0; i < breedsKeys.length; i++) {
    let breedLi = document.createElement('li')
    breedLi.classList = "breed"
    breedLi.textContent = breedsKeys[i]
    breedsList.appendChild(breedLi)

    breedLi.addEventListener("click", function(){this.style.color = "red";} )
  }
});

// FILTER - DOESN'T WORK
// const dropdown = document.getElementById('breed-dropdown')
//
// dropdown.addEventListener("click", function() {
//   const options = dropdown.querySelectorAll('option');
//
// } )

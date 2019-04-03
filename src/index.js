console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
  .then( res => res.json() )
  .then( data => {

    renderDogImages(data)
  })


function renderDogImages(data) {
const dogs = document.getElementById('dog-image-container')
data.message.forEach((dog) => {
  let dogImg = document.createElement('img')
  dogImg.src = dog
  dogs.appendChild(dogImg)
})
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
  .then( res => res.json())
  .then( data => {

    getBreeds(data)
  })

const breeds = document.getElementById('dog-breeds')

function getBreeds(data) {

  Object.keys(data.message).forEach((dog)=> {
      let breed = document.createElement('li')
      breed.textContent = dog
      breeds.appendChild(breed)
      breed.addEventListener('click', (ev)=> {
        ev.target.classList.add("colored")

      })
  })
}

const breedDd = document.getElementById('breed-dropdown')
breedDd.addEventListener('change', (ev) => {
[].slice.call(breeds.children).forEach((breed)=> {
  if (breed.textContent.startsWith(ev.target.value)){
    breed.classList.remove('hidden')
  }

  else {
    breed.classList.add('hidden')
  }
})

})

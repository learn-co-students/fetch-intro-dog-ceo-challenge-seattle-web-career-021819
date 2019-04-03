console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded, preparing to fetch...')


  // render dog images
  const dogImageContainer = document.getElementById('dog-image-container')

  fetch(imgUrl)
    .then( res => res.json() )
    .then( function(json) {
      console.log('JSON retrieved, creating ul/li/img child nodes for dog images...')
      renderDogImgs(json)
    });

  function renderDogImgs(json) {
    let ul = document.createElement('ul')
    dogImageContainer.appendChild(ul)

    for (let i = 0; i < json.message.length; i++) {
      let li = document.createElement('li')
      ul.appendChild(li)

      let img = document.createElement('img')
      img.src = json.message[i]
      li.appendChild(img)
    }
  };


  // render list of dog breeds
  const dogBreeds = document.getElementById('dog-breeds')

  fetch(breedUrl)
    .then( res => res.json() )
    .then( function(json) {
      console.log('JSON retrieved, creating ul/li child nodes for dog breeds...')
      listDogBreeds(json)
    });

    function listDogBreeds(json) {
      array = Object.keys(json.message)
      for (let i = 0; i < array.length; i++) {
        console.log('hi!');
        let li = document.createElement('li')
        li.innerText = array[i]
        dogBreeds.appendChild(li)

        // eventlistener - change color on click
        li.addEventListener('click', () => {
          li.style.color = 'pink'
        })
      }
    };


  // filter by first letter, a-d
  const breedDropdown = document.getElementById('breed-dropdown')

  breedDropdown.addEventListener('change', () => {
    letter = breedDropdown.value
    filterList(letter)
  });

  function filterList(letter) {
    let list = dogBreeds.children
    for (let i = 0; i < list.length; i++) {
      let breed = list[i]
      let firstLetter = breed.textContent.slice(0, 1)
      if (firstLetter !== letter) {
        breed.classList.add('hidden')
      }
      if (firstLetter === letter) {
        breed.classList.remove('hidden')
      }
    }
  }



})

console.log('%c HI', 'color: firebrick')

let ul = document.getElementById('dog-breeds')
let dropDown = document.getElementById('breed-dropdown')

// -------------   URLs
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// -------------   Fetching
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderPhotos(json.message));

fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => addBreeds(json.message))

// -------------   Rendering Photos
const renderPhotos = (photos) => {

  let ul = document.getElementById('dog-image-container')

  photos.forEach(photo => {

    let li = document.createElement('li')
    let img = document.createElement('img')

    img.src = photo

    li.appendChild(img)
    ul.appendChild(li)
  })
}

// -------------   Adding Dog Breeds
const addBreeds = (breeds) => {

  let ul = document.getElementById('dog-breeds')

  for (var key in breeds){
    let li = document.createElement('li')

    li.textContent = key
    li.addEventListener('click', () => {
      console.log('clicked!')
      li.style.color = "green"
    })
    ul.appendChild(li)
  }

}

// -------------   Filter
dropDown.addEventListener('change', (event) => {

  let children = ul.children

  let length = children.length
  for (let i = length - 1; i >= 0; i--) {
    let child = children[i]
    if (child.textContent.startsWith(event.target.value)) {
      // console.log(children.length, 'kept', filter, child.textContent)
    } else {
      // console.log(children.length, 'removed', filter, child.textContent)
      child.remove()
    }
  }
})

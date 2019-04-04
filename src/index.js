const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
 .then(response => {
   return response.json()
 })
 .then(json => {
   console.log(json)

  let div = document.getElementById("dog-image-container")
  let images = json.message

  images.forEach(function (image){
    let img = document.createElement('img')
    img.src = image
    div.appendChild(img)
  })
 })


fetch(breedUrl)
  .then(response => {
    return response.json()
  })
  .then(json => {
    let breeds = Object.keys(json.message)
    console.log(breeds)
    console.log(typeof breeds)

    let ul = document.getElementById("dog-breeds")

   breeds.forEach(function (breed){
     console.log(breed)
      let brd = document.createElement('li')
      brd.textContent = breed
      brd.id = "font"
      brd.addEventListener('click', () => {
        console.log('clicked!')
        brd.id = "blue"
      })
      ul.appendChild(brd)
    })
  })

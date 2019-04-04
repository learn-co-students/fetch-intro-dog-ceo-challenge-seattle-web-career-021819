console.log('%c HI', 'color: firebrick')

const imageURL = 'https://dog.ceo/api/breeds/image/random/4';
const breedURL = 'https://dog.ceo/api/breeds/list/all';

fetch(imageURL)
.then(response => {
  return response.json();
})
.then(data => {
  let pics = data.message
  renderDogs(pics);
});

fetch(breedURL)
.then(response => response.json())
.then(data => {
  let allBreeds = data.message;
  let BreedKeys = Object.keys(allBreeds);
  renderBreeds(BreedKeys);
});

function renderDogs(dogs) {
 const dogImageContainer = document.getElementById('dog-image-container');
 dogs.forEach(dogItem => {
   let dogPic = document.createElement('img');
   dogPic.src = dogItem;
   dogImageContainer.appendChild(dogPic);

 })
};

function renderBreeds(breeds) {
  let ul = document.getElementById('dog-breeds');
  breeds.forEach(breedItem => {
    let li = document.createElement('li');
    li.textContent = breedItem
    ul.appendChild(li)
    li.addEventListener('click', () => {
      li.style.color = "pink"
    });
  });
}

// function handleFilter(ev) {
//   ev.preventDefault()
//   let form = getElementById('breed-dropdown');
//   form.addEventListener('select', filterBreeds());
// }
//
//
// function filterBreeds(filter){
//   let ul = document.getElementById('dog-breeds')
//   let children = ul.children
//   let length = children.length
//   for(let i= length - 1; i >= 0; i--) {
//     let child = children[i]
//     if (child.textContent.includes(filter)) {
//
//     } else {
//       child.remove()
//     }
//   }

// }

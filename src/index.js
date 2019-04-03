console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogfilter=document.getElementById('breed-dropdown');

dogfilter.addEventListener('change', ()=> {
    letter=dogfilter.value
    filterDogs(letter); 
})

fetch(imgUrl)   
.then(response => {
    return response.json();
})
.then(data => {
   renderImages(data.message);
})


fetch(breedUrl)
.then(response => {
    return response.json();
})
.then(data => {
   breedNames(Object.keys(data.message));
})


function renderImages (images){
    images.forEach(img => {
        let board=document.getElementById('dog-image-container')
        let pic = document.createElement('img')
        pic.src=img
        board.appendChild(pic)     
    });
}

function breedNames (breeds){
    breeds.forEach(breed => {
        let li=document.createElement('li')
        let ul=document.getElementById('dog-breeds')
        li.textContent=breed
        li.addEventListener('click', () => {
            li.style.color = 'red';
        })
        ul.appendChild(li)        
    });
}


function filterDogs(filter) {
    let ul = document.getElementById('dog-breeds')
    let children = ul.children
  
    let length = children.length
    for (let i = length - 1; i >= 0; i--) {
      let child = children[i]
      if (child.textContent.startsWith(filter)) {
        console.log(children.length, 'kept', filter, child.textContent)
      } else {
        console.log(children.length, 'removed', filter, child.textContent)
        child.remove()
      }
    }
}





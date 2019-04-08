console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

//fetching images
fetch(imgUrl)
  .then(response => response.json())
  .then(data => assignPicture(data.message));

//assigning Pictures to HTML
const assignPicture = (photos) => {
  photos.forEach(photo => {
    const dogImages = document.getElementById('dog-image-container');
    const dogPhoto = document.createElement('li');
    const img = document.createElement('img');
    dogPhoto.appendChild(img);
    dogImages.appendChild(dogPhoto);
    img.src = photo;
  });
};

//fetching Breeds
fetch(breedUrl)
  .then(response => response.json())
  .then(data => assignBreed(data.message));

//assigning Breeds to HTML
const assignBreed = (breeds) => {
  for (var key in breeds) {
    const dogBreeds = document.getElementById("dog-breeds");
    const oneBreed = document.createElement('li');
    dogBreeds.appendChild(oneBreed);
    oneBreed.textContent = key;
    oneBreed.addEventListener('click', () => {
      oneBreed.style.color = 'blue';
    })
  };
};

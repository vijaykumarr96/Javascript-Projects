const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const count = 30;
let imagesLoaded = 0;

// Unsplash API
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&orientation=landscape&topics=nature`;
let photosArray = [];

//get photos from unsplash api
async function getPhotos() {
  const response = await fetch(apiUrl);
  photosArray = await response.json();
  console.log(photosArray);
  displayPhotos();
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  photosArray.forEach((photo) => {
    const a = document.createElement("a");
    setAttributes(a, {
      href: photo.links.download,
      target: "_blank",
    });
    const image = document.createElement("img");
    setAttributes(image, {
      src: photo.urls.full,
      alt: photo.alt_description,
    });
    a.appendChild(image);
    imageContainer.appendChild(a);
    loader.hidden = true;
  });
}
getPhotos();

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

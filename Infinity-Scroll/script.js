// get elements
const imageContainer = document.getElementById("image__container");
const loader = document.getElementById("loader");

// global vaiable from photos array
let photosArray = [];

// Unsplash Api
const count = 10;
const apiKey = "Your Secret Api Key";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to setAttributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// display photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    console.log(photo);

    // create a element
    const anchor = document.createElement("a");
    setAttributes(anchor, {
      href: photo.links.html,
      target: "_blank",
    });

    // create image element
    const image = document.createElement("img");
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    anchor.appendChild(image)
    imageContainer.appendChild(anchor)
  });
}

// Get random photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

getPhotos();

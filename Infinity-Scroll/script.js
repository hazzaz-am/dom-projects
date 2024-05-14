// get elements
const imageContainer = document.getElementById("image__container");
const loader = document.getElementById("loader");

// global vaiable from photos array
let photosArray = [];
let totalImages = 0;
let imagesLoaded = 0;
let ready = false;

// Unsplash Api
const imageCount = 10;
const apiKey = "RZ-TyQbbn6SqeDKHBM6OQOKH23ML8Z1hEBwjdFBMxjU";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;

// check image were loaded
function imgLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    imageCount = 30;
  }
}

// helper function to setAttributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// display photos
function displayPhotos() {
  totalImages = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // create <a> element
    const anchor = document.createElement("a");
    setAttributes(anchor, {
      href: photo.links.html,
      target: "_blank",
    });

    // create <image> element
    const image = document.createElement("img");
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // trigger this on window load
    image.addEventListener("load", imgLoaded);

    // append element to the conatainer
    anchor.appendChild(image);
    imageContainer.appendChild(anchor);
  });
}

// Get random photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error
  }
}

// eventlistener for infinity scroll
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// calling api on load
getPhotos();

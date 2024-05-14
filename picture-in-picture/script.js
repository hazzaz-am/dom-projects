// select elements
const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

// prompt to select media stream
async function selectMediaStream() {
  try {
    // web api capture
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

// click start button to start picture in  picture
buttonElement.addEventListener("click", async () => {
  // after button click
  buttonElement.disabled = true;

  // start picture in picture
  await videoElement.requestPictureInPicture();

  // after video play
  buttonElement.disabled = false;
});

// on load
selectMediaStream();

const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// disable or enable button while telling the joke
function toggleButton () {
    button.disabled = !button.disabled;
}

// passing joke to VoiceRSS Api
function tellMe(joke) {
  VoiceRSS.speech({
    key: "237066f7649d4c749a2ec4af1eabc0ed",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// get jokes from api
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit";

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // text to speech
    tellMe(joke);

    // disable button
    toggleButton()
  } catch (error) {
    console.log(error);
  }
}

// event listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);

// get the elements
const quoteContainer = document.getElementById("quote-container");
const quoteValue = document.getElementById("quote");
const authorValue = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const loader = document.getElementById("loader");

// set loading
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// remove loading
function stopLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

let apiQuotes = [];

// random quote generate
function newQuote() {
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // console.log(quote);

  if (!quote.author) {
    authorValue.innerText = "UnKnown";
  } else {
    authorValue.innerText = quote.author.split(",")[0];
  }

  if (quote.text.length > 50) {
    quoteValue.classList.add("long-quote");
  } else {
    quoteValue.classList.remove("long-quote");
  }
  quoteValue.innerText = quote.text;
  stopLoadingSpinner();
}

// get quotes from api
async function getQuotesFromApi() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // handle error
    console.error(error, error.message)
  }
}

function shareTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteValue.innerText} - ${authorValue.innerText}`;
  window.open(twitterUrl, "_blank");
}

// event listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", shareTwitter);

getQuotesFromApi();

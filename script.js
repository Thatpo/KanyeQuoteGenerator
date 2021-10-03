const text = document.getElementsByClassName("text")[0];
const newQuote = document.getElementById("nw-qs");
const tweets = document.getElementById("tweet");
let twitter = "";
newQuote.addEventListener("click", function () {
    fetchQuotes()

})

async function fetchQuotes() {
    const resp = await fetch(`https://api.kanye.rest`)
    const data = await resp.json();
    twitter = data.quote
    text.textContent = data.quote;

}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitter}`;
    window.open(twitterUrl, '_blank');
}
tweets.addEventListener("click", tweetQuote);


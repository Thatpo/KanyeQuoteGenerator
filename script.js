const text = document.getElementsByClassName("text")[0];
const newQuote = document.getElementById("nw-qs");
const tweet = document.getElementById("nw-tweet");

newQuote.addEventListener("click", function () {
    fetchQuotes()
})

async function fetchQuotes() {
    const resp = await fetch(`https://api.kanye.rest`)
    const data = await resp.json();
    text.textContent = data.quote;
}

tweet.addEventListener("click", function () {

})

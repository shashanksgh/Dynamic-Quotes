const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotebutton = document.getElementById("newQuotebutton");
const tweet = document.getElementById("tweet");

let realData = "";

const tweetFunc = () => {
    const link = 'https://twitter.com/intent/tweet';
    window.open(link);
};

const getNewQuotes = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let quo = realData[randomNumber].text;
    let aut = realData[randomNumber].author;
    console.log(realData[randomNumber].text);
    quotes.innerHTML = quo;
    author.innerHTML = aut;
};

const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {}
};

newQuotebutton.addEventListener('click', getNewQuotes);
tweet.addEventListener('click', tweetFunc);
getQuotes();
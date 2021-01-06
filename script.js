const random_quote_api='http://api.quotable.io/random';
const quoteDisplayElement=document.getElementById('quote-display');
const quoteInputElement=document.getElementById('quote-input');

function random_Quote(){
    return fetch(random_quote_api)
    .then(response=>response.json())
    .then(data=>data.content)
}

async function renderNewQuote(){
    const quote=await random_Quote();
    quoteDisplayElement.innerText=quote;
    quote.split('').forEach(char => {
        const charSpan=document.createElement('span');
        charSpan.innerText=char;
        quoteDisplayElement.appendChild(charSpan);
    });
    quoteInputElement.value=null;
}

renderNewQuote();
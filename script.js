const random_quote_api='http://api.quotable.io/random';

function random_Quote(){
    return fetch(random_quote_api)
    .then(response=>response.json())
    .then(data=>data.content)
}

async function getNextQuote(){
    const quote=await random_Quote()
    console.log(quote);
}

getNextQuote();
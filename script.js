const random_quote_api='http://api.quotable.io/random';
const quoteDisplayElement=document.getElementById('quote-display');
const quoteInputElement=document.getElementById('quote-input');
const timerElement=document.getElementById('timer');

quoteInputElement.addEventListener('input', ()=>{
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    let correct=true;

    arrayQuote.forEach((characterSpan,index)=>{
        const character=arrayValue[index];

        if(character==null){
            characterSpan.classList.remove('incorrect');
            characterSpan.classList.remove('correct');
            correct=false;
        }
        else if(character===characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else{
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct=false;
        }
    });
    if(correct)renderNewQuote();
});

function random_Quote(){
    return fetch(random_quote_api)
    .then(response=>response.json())
    .then(data=>data.content)
}

async function renderNewQuote(){
    const quote=await random_Quote();
    quoteDisplayElement.innerText='';
    quote.split('').forEach(char => {
        const charSpan=document.createElement('span');
        charSpan.innerText=char;
        quoteDisplayElement.appendChild(charSpan);
    });
    quoteInputElement.value=null;
    startTimer();
}

function startTimer(){
    timerElement.innerText=0;
}

renderNewQuote();
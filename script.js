const priceBitcoin = document.querySelector('#one-input')
const valueDollars = document.querySelector('#two-input')
const resultInner = document.querySelector('.result')

function handlerFunction() {
    let res = '';
    if (valueDollars.value.length >= 1 && priceBitcoin.value.length >= 1) {
        res = valueDollars.value / priceBitcoin.value;
        resultInner.innerHTML = `You can buy ${res} BTC`;
    } else {
        resultInner.innerHTML = ``;
    }
    
}
valueDollars.oninput = handlerFunction
priceBitcoin.oninput = handlerFunction

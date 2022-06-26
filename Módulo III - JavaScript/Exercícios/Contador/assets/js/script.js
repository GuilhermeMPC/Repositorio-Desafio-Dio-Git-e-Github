var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 2;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "black"
    }
    if (currentNumber >= 10) {
        currentNumber = 10;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    }

    
    
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red"
    }
    if (currentNumber <= -10) {
        currentNumber = -10;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

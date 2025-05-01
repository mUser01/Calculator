// DISPLAY:
let display = document.body.querySelector("#display");

// BUTTONS:
const buttons = document.body.querySelectorAll("button");

// CLICKS EVENT:

let oldVal = [];
let currentVal = String(display.value);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case 'equals':
                if (oldVal.length > 0) {
                    display.value = calculate();
                }
                break;
            case 'add':
                oldVal = [currentVal, '+'];
                display.value = '';
                console.log(oldVal);
                break;
            case 'subtract':
                oldVal = [currentVal, '-'];
                display.value = '';
                console.log(oldVal);
                break;
            case 'multiply':
                oldVal = [currentVal, '*'];
                display.value = '';
                console.log(oldVal);
                break;
            case 'divide':
                oldVal = [currentVal, '/'];
                display.value = '';
                console.log(oldVal);
                break;
            case 'clear':
                display.value = '';
                break;
            case 'float':
                display.value += '.'; 
                break;
            case 'backspace':
                display.value = currentVal.slice(0, currentVal.length-1);
                break;
            default:
                display.value += button.textContent;
        }
        currentVal = String(display.value);
    })
});


// CALCULATE FUNCTION;:
function calculate() {
    const n1 = +oldVal[0];
    const operator = oldVal[1];
    const n2 = +currentVal;

    switch (operator) {
        case '*':
            return multiply(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
            break;
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return subtract(n1, n2);
            break;
        default:
            return `ERROR`;
    }
}

// MATH FUNCTIONS:
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return (n2 != 0) ? n1 / n2 : 'ERROR: cannot divide by 0';
}
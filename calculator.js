function add(a, b) {
    return console.log(a + b);
}

function subtract(a, b) {
    return console.log(a - b);
}

function multiply(a, b) {
    return console.log(a * b);
}

function divide(a, b) {
    return console.log(a / b);
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
'use strict';

function add(operand1, operand2) {
    return operand1 + operand2;
};

function subtract(operand1, operand2) {
    return operand1 - operand2;
};

function multiply(operand1, operand2) {
    return operand1 * operand2;
};

function divide(operand1, operand2) {
    if(operand2 === 0) return 'Undefined';
    return operand1 / operand2;
};

function operate(operator, operand1, operand2) {
    switch (operator) {
        case 'add':
            return add(operand1, operand2);
        case 'subtract':
            return subtract(operand1, operand2);
        case 'multiply':
            return multiply(operand1,operand2);
        case 'divide':
            return divide(operand1,operand2);
        default:
            // do nothing
    };
};
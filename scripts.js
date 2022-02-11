'use strict';

let equation = [];

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
    if (operand2 === 0) return 'Undefined';
    return operand1 / operand2;
};

function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return add(+operand1, +operand2);
        case '-':
            return subtract(+operand1, +operand2);
        case '*':
            return multiply(+operand1, +operand2);
        case '/':
            return divide(+operand1, +operand2);
        default:
        // do nothing
    };
};

const digits = document.querySelectorAll('.digits');
const display = document.getElementById('display');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const operator = document.querySelectorAll('.operator');

digits.forEach((digits) => {
    digits.addEventListener('click', () => {
        if(equation[0] === '='){
            display.value = "";
        }

        display.value += digits.innerHTML;
    });
});

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.value += ` ${operator.innerHTML} `
        equation = display.value.split(" ")
        console.log(equation);

        if(equation.length >= 5) {
            display.value = operate(equation[1], equation[0], equation[2]) + ` ${equation[3]} `;
        };

    });
});

equals.addEventListener('click', () => {
    equation = display.value.split(" ")
    console.log(equation);
    if(equation.length >= 3){
        display.value = operate(equation[1], equation[0], equation[2]);
        equation = [];
        equation.unshift('=');
        console.log(equation);
    }    
});

clear.addEventListener('click', () => {
    display.value = "";
});
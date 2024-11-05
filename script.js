const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

function triggerpulseAnimation() {
    display.style.animation = 'none';
    void display.offsetWidth;
    display.style.animation = 'pulse 0.3s ease-in-out';
}

// Add Event Listener 

buttons.forEach(button => {
    button.addEventListener('click',() =>{
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            //clear all inputs
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value ='';
        }
        else if (value === '=') {
            //claculate
            if (operator && previousInput && currentInput) {
                currentInput = eval (`${previousInput} ${operator} ${currentInput}`);
                display.value = currentInput;
                operator = '';
                previousInput = '';
                triggerpulseAnimation();
            }
        }
        else if (['+', '-', '*', '/'].includes(value)) {
            //set operator and store previous input
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
        else {
            //update current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});


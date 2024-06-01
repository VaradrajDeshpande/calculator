let displayValue = '';

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

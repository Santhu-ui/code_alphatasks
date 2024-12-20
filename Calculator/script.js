function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression safely
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear display after 1.5 seconds
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the key is a number or an operator
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }

    // Check for the Enter key to calculate the result
    if (key === 'Enter') {
        calculateResult();
    }

    // Check for the Backspace key to delete the last character
    if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }

    // Check for the Escape key to clear the display
    if (key === 'Escape') {
        clearDisplay();
    }
});
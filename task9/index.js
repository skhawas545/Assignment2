function multiply() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = parseFloat(num1) * parseFloat(num2);
        document.getElementById('result').textContent = `Result of ${num1} * ${num2} = ${result}`;
    } else {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    }
}

function divide() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    // Check if inputs are valid numbers and divisor is not zero
    if (!isNaN(num1) && !isNaN(num2) && parseFloat(num2) !== 0) {
        let result = parseFloat(num1) / parseFloat(num2);
        document.getElementById('result').textContent = `Result of ${num1} / ${num2} = ${result}`;
    } else if (parseFloat(num2) === 0) {
        document.getElementById('result').textContent = "Cannot divide by zero.";
    } else {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    }
}

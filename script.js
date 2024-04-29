var mode = "easy"; // Default mode is easy

// Function to change the mode
function changeMode() {
    mode = document.getElementById("mode").value;
    generateProblem(); // Generate a new problem when mode changes
}

// Function to generate a random math problem based on the mode
function generateProblem() {
    var num1, num2, operator;
    switch (mode) {
        case "easy":
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
            break;
        case "intermediate":
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
            break;
        case "hard":
            num1 = Math.floor(Math.random() * 21) - 10; // Include negatives
            num2 = Math.floor(Math.random() * 21) - 10; // Include negatives
            operator = ['+', '-', '*', '^'][Math.floor(Math.random() * 4)]; // Include squares
            if (operator === '^') {
                num2 = 2; // Square
            }
            break;
    }
    var problemElement = document.getElementById("problem");
    problemElement.textContent = num1 + " " + operator + " " + num2;
}



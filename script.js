// Function to generate a random math problem
function generateProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = ['+', '-', '*'][Math.floor(Math.random() * 3)]; // Removed division
    var problemElement = document.getElementById("problem");
    problemElement.textContent = num1 + " " + operator + " " + num2;
}

// Function to check the answer
function checkAnswer() {
    var problem = document.getElementById("problem").textContent;
    var answer = parseFloat(document.getElementById("answer").value);
    var resultElement = document.getElementById("result");
    var nums = problem.split(" ");
    var num1 = parseInt(nums[0]);
    var num2 = parseInt(nums[2]);
    var operator = nums[1];
    var correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
    }

    if (answer === correctAnswer) {
        resultElement.textContent = "Correct! The answer is " + correctAnswer;
    } else {
        resultElement.textContent = "Incorrect. Try again!";
    }
}

// Function to set a custom problem
function setCustomProblem() {
    var customProblem = document.getElementById("customProblem").value;
    var problemElement = document.getElementById("problem");
    problemElement.textContent = customProblem;
}

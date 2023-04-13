let startbtn = document.querySelector('.start-btn');
let quizEl = document.querySelector('#quiz');
let timerEl = document.querySelector('.timer');
let homeEl = document.querySelector('.quiz-intro');
let highscoreLi = document.querySelector('.highscore-btn')


var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<scripting>", "<js>"],
        answer: "<script>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag?",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('HelloWorld');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        question: "How do you generate a function in JavaScript?",
        choices: ["function = myFunction()", "function myFunction()", "function: myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["myFunction()", "callfunction myFunction()", "call myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "How to write and IF statement in JavaScript?",
        choices: ["if i = 5", "if(i =< 5)", "if i == 5 then", "if i = 5 then"],
        answer: "if(i =< 5)"
    },
    {
        question: "How can you add a comment in JavaScript?",
        choices: ["'This is a Comment'", "//This is a Comment", "<--This is a Comment-->"],
        answer: "//This is a Comment"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        choices: ["round(7.25)", "rnd(7.25)", "Math.round(7.25)", "Math.rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
];

let score = 0;
let questionIndex = 0;
var secondsLeft = 120;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

function init() {
    renderHome();
}


startbtn.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timerEl.textContent = "Timer: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                finished();
                timerEl.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    // Clears existing data 
    quizEl.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        quizEl.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizEl.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    quizEl.appendChild(createDiv);
}

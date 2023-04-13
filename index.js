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
        answer: "//This is a comment"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        choices: ["round(7.25)", "rnd(7.25)", "Math.round(7.25)", "Math.rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
];


function init() {
    renderHome();
}

highscoreLi.addEventListener('click', renderScoreboard);



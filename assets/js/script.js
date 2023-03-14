let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("questions-container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container"); 
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startBtn= document.getElementById("start-button")
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown; 


const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language", 
            "HyperText Markup Language",
            "HyperText Markup Leveler",
        ],
        correct:"HyperText Markrup language",
    },
    {
        id: "1",
        question: "Which command will stop an infinite loop?",
        options: [
            "Alt - C",
            "Shift - C", 
            "Esc",
            "Ctrl - C",
        ],
        correct:"Ctrl - C",
    },
    {
        id: "2",
        question: "Which is not a required part of a loop?",
        options: [
            "Initialization",
            "Condition", 
            "Variable",
            ") Increment",
        ],
        correct:"Variable",
    },
    {
        id: "3",
        question: "__ is the process of finding errors and fixing them within a program.",
        options: [
            "Compiling",
            "Executing", 
            "Debugging",
            "Scanning",
        ],
        correct:"Debugging",
    },
    {
        id: "4",
        question: "During program development, software requirements specify",
        options: [
            "How the program will accomplish the task",
            "What the task is that the program must perform", 
            "How to divide the task into subtasks",
            "How to test the program when it is done",
        ],
        correct:"What the task is that the program must perform",
    },
    {
        id: "5",
        question: "At run-time, a Java program is nothing more than objects 'communicating' to ___.",
        options: [
            "Other objects",
            "Other methods", 
            "Other classes",
            "Other binders",
        ],
        correct:"Other objects",
    },
    {
        id: "6",
        question: "What must string values be enclosed within when assigning them to variables?",
        options: [
            "Commas",
            "Quotes", 
            "Paranthesis",
            "Straight brackets",
        ],
        correct:"Quotes",
    },
    {
        id: "7",
        question: "What would you use to check if two variables are equal in an if/ else statement?",
        options: [
            "==",
            "=", 
            "is equal to",
            "!=",
        ],
        correct:"==",
    },
    {
        id: "8",
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<javaScript>",
            "<js>", 
            "<script>",
            "<scripting>",
        ],
        correct:"<script>",
    },
    {
        id: "9",
        question: "Where is the correct place to insert a JavaScript?",
        options: [
            "The <head> section",
            "The <body> section", 
            "The end of the <body> section",
            "Anywhere",
        ],
        correct:"The end of the <body> section",
    }
]
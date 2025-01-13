"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables


// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");
let shiftValue;
let popValue;

function updateAnswerOne() {
    answerOneEl.innerText = todos
}

function updateAnswerTwo() {
    answerTwoEl.innerText = todos[2]
}

function removeLastValue() {
   popValue = todos.pop()
}

function updateAnswerFour() {
    removeLastValue()
    answerFourEl.innerText = todos
}

function reverseTodoList() {
   todos.reverse()
}

function updateAnswerFive() {
    reverseTodoList()
    answerFiveEl.innerText = todos
}

function removeFirstValue() {
    shiftValue = todos.shift()
}

function addShiftAndPopValues() {
    removeFirstValue() 

    todos.push(shiftValue)
    todos.push(popValue)
}

function updateAnswerSix() {
    addShiftAndPopValues()
    answerSixEl.innerText = todos
}

function render() {
    updateAnswerOne()
    updateAnswerTwo()
    updateAnswerFour()
    updateAnswerFive()
    updateAnswerSix()
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});

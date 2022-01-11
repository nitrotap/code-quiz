var timerEl = document.querySelector("#timer");
var time = 90;
var titleEl = document.querySelector("#main-title");
var subTitleEl = document.querySelector("#sub-title");
var startButtonEl = document.querySelector("#start-button");

var timer = function (seconds) {
    if (time > 0) {
        time--;
        timerEl.innerHTML = time;
    } else {
        clearInterval(timer);
    }
};

var countdown = function () {
    var intervalID = setInterval(timer, 1000);
};

var startScreen = function() {
    titleEl.innerHTML = "<h1>Coding Quiz Challenge<h1>";
    subTitleEl.innerHTML = "<h3> A simple coding quiz to test your coding knowledge!</h3>";
    startButtonEl.innerHTML = "<h2>Start Quiz</h2>";
    startButtonEl.addEventListener("click", question1);
}

var question1 = function() {
    countdown();
    console.log("question 1");
    titleEl.innerHTML = "<h1>Question 1: Question Here!<h1>";
    subTitleEl.remove();

    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    answer1.textContent = "the answer is here";

    
}


var quiz = function() {
    countdown();
    question1();
}


startScreen();

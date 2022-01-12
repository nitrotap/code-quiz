var time = 90;
var timerEl = document.querySelector("#timer");
timerEl.className = "timer";

var timer = function () {
    if (time > 0) {
        time--;
        timerEl.innerHTML = time + "s";
    } else {
        clearInterval(timer);
    }
};

var countdown = function () {
    var intervalID = setInterval(timer, 1000);
};



var titleEl = document.querySelector("#main-title");
titleEl.className = "title-element";
var subTitleEl = document.querySelector("#sub-title");
var startButtonEl = document.querySelector("#start-button");



var startScreen = function() {
    titleEl.innerHTML = "<h1>Coding Quiz Challenge<h1>";
    subTitleEl.innerHTML = "<h3> A simple coding quiz to test your coding knowledge!</h3>";
    startButtonEl.innerHTML = "<h2>Start Quiz</h2>";
    startButtonEl.addEventListener("click", question1);
}

var question1 = function() {
    countdown();
    console.log("question 1");
    titleEl.textContent = "Question 1: Question Here!";
    subTitleEl.remove();

    var answerBox = document.createElement("div");
    answerBox.className = "answers";

    var answer1 = document.createElement("button");
    answer1.textContent = "the answer is here";
    answerBox.appendChild(answer1);

    titleEl.appendChild(answerBox);

    
}


var quiz = function() {
    countdown();
    question1();
}


startScreen();

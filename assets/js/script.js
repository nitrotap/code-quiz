var time = 91;
var timerEl = document.querySelector("#timer");
timerEl.className = "timer";
var timerRowEl = document.querySelector("#timer-row");
var titleEl = document.querySelector("#main-title");
titleEl.className = "title-element";
var subTitleEl = document.querySelector("#sub-title");
var startButtonEl = document.querySelector("#start-button");

var answerBox = document.createElement("div");
answerBox.className = "answers";

var answer1 = document.createElement("button");
answer1.textContent = "first Answer";

var answer2 = document.createElement("button");
answer2.textContent = "second Answer";

var answer3 = document.createElement("button");
answer3.textContent = "third Answer";

var answer4 = document.createElement("button");
answer4.textContent = "fourth Answer";

answerBox.appendChild(answer1);
answerBox.appendChild(answer2);
answerBox.appendChild(answer3);
answerBox.appendChild(answer4);




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

var startScreen = function() {
    titleEl.textContent = "Coding Quiz Challenge";
    subTitleEl.textContent = "A simple coding quiz to test your coding knowledge!";
    startButtonEl.innerHTML = "Start Quiz";
    startButtonEl.addEventListener("click", function() {
        countdown();
        question1();
        subTitleEl.remove();
        startButtonEl.remove();
    
    });
}

var question1 = function() {
    console.log("question 1");
    titleEl.textContent = "Commonly used data types do not include:";
    answer1.textContent = "strings";
    answer2.textContent = "booleans";
    answer3.textContent = "alerts";
    answer4.textContent = "numbers";
    titleEl.appendChild(answerBox);
    answer1.addEventListener("click", question2);
}

var question2 = function() {
    console.log("question 2");

}


var quiz = function() {
    countdown();
    question1();
}


startScreen();

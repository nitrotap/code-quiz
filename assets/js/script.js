var time = 91;

var timerEl = document.querySelector("#timer");
timerEl.className = "timer";

var titleEl = document.querySelector("#main-title");
titleEl.className = "title-element";

var timerRowEl = document.querySelector("#timer-row");
var subTitleEl = document.querySelector("#sub-title");
var startButtonEl = document.querySelector("#start-button");

// building answerbox
answers = new Array();

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

var startScreen = function () {
  titleEl.textContent = "Coding Quiz Challenge";
  subTitleEl.textContent =
    "A simple coding quiz to test your coding knowledge!";
  startButtonEl.innerHTML = "Start Quiz";
  startButtonEl.addEventListener("click", function () {
    countdown();
    subTitleEl.remove();
    startButtonEl.remove();
    question1();
  });
};


var question1 = function () {
  console.log("question 1");
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
  titleEl.textContent = "Commonly used data types do NOT include:";
  answer1.textContent = "strings";
  answer2.textContent = "booleans";
  answer3.textContent = "alerts";
  answer4.textContent = "numbers";
  titleEl.appendChild(answerBox);
  answer1.addEventListener("click", function () {
    wrongAnswer();
    question2();
    answer1.removeEventListener("click", question1);
  });
  answer2.addEventListener("click", function () {
    wrongAnswer();
    question2();
    answer2.removeEventListener("click", question1);
  });
  answer3.addEventListener("click", function () {
    rightAnswer();
    question2();
    answer3.removeEventListener("click", question1);
  });
  answer4.addEventListener("click", function () {
    wrongAnswer();
    question2();
    answer4.removeEventListener("click", question1);
  });
};

var question2 = function () {
  console.log("question 2");
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
  titleEl.textContent =
    "The condition in an if/else statement is enclosed with __________.";
  answer1.textContent = "quotes";
  answer2.textContent = "curly brackets";
  answer3.textContent = "parenthesis";
  answer4.textContent = "square brackets";
  titleEl.appendChild(answerBox);
  answer1.addEventListener("click", function () {
    wrongAnswer();
    question3();
  });
  answer2.addEventListener("click", function () {
    wrongAnswer();
    question3();
  });
  answer3.addEventListener("click", function () {
    rightAnswer();
    question3();
  });
  answer4.addEventListener("click", function () {
    wrongAnswer();
    question3();
  });
};

var question3 = function () {
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
  console.log("question 3");
  titleEl.textContent = "Arrays in JavaScript can be used to store __________.";
  answer1.textContent = "numbers and strings";
  answer2.textContent = "other arrays";
  answer3.textContent = "booleans";
  answer4.textContent = "all of the above";
  titleEl.appendChild(answerBox);
  answer1.addEventListener("click", function () {
    wrongAnswer();
    question4();
  });
  answer2.addEventListener("click", function () {
    wrongAnswer();
    question4();
  });
  answer3.addEventListener("click", function () {
    wrongAnswer();
    question4();
  });
  answer4.addEventListener("click", function () {
    rightAnswer();
    question4();
  });
};

var rightAnswer = function () {
  answers.push("right");
  console.log(answers);
};

var wrongAnswer = function () {
  answers.push("wrong");
  console.log(answers);
};

var saveAnswer = function () {
  localStorage.setItem("answers", JSON.stringify(answers));
  console.log(JSON.stringify(answers));
};

startScreen();

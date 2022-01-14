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

var question4 = function () {
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
    titleEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: __________.";
    answer1.textContent = "JavaScript";
    answer2.textContent = "terminal/bash";
    answer3.textContent = "for loops";
    answer4.textContent = "console.log";
    titleEl.appendChild(answerBox);
    answer1.addEventListener("click", function () {
        wrongAnswer();
        question5();
    });
    answer2.addEventListener("click", function () {
        wrongAnswer();
        question5();
    });
    answer3.addEventListener("click", function () {
        wrongAnswer();
        question5();
    });
    answer4.addEventListener("click", function () {
        rightAnswer();
        question5();
    });
};

var question5 = function () {
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
    titleEl.textContent = "String values must be enclosed within __________ when being assigned to variables.";
    answer1.textContent = "commas";
    answer2.textContent = "curly brackets";
    answer3.textContent = "quotes";
    answer4.textContent = "parenthesis";
    titleEl.appendChild(answerBox);
    answer1.addEventListener("click", function () {
        wrongAnswer();
        highScores();
    });
    answer2.addEventListener("click", function () {
        wrongAnswer();
        highScores();
    });
    answer3.addEventListener("click", function () {
        rightAnswer();
        highScores();
    });
    answer4.addEventListener("click", function () {
        wrongAnswer();
        highScores();
    });
}

var highScores = function () {
    event.preventDefault();
    // capture time remaining
    timeScore = time;
    titleEl.textContent = "All done!";

    var score = 0;
    // score is timeScore - (#ofincorrects)*10
    var timePenalty = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "wrong") {
            timePenalty += 10;
        }
    }

    score = timeScore - timePenalty;
    if (score < 0) {
        score = 0;
    }

    subTitleEl.textContent = "Your final score is: " + score + "\n"
        + "Your penalty is: " + timePenalty;
    titleEl.appendChild(subTitleEl);


    var submitFormEl = document.createElement("div");
    submitFormEl.className = "submit-form";
    var submitFormTextEl = document.createElement("h3");
    submitFormTextEl.className = "submit-text";
    submitFormTextEl.textContent = "Enter Initials: ";
    var submitFormInputEl = document.createElement("input");
    submitFormInputEl.type = "text";
    submitFormInputEl.placeholder = "Enter Initials Here."
    submitFormInputEl.name = "submit-form-input";
    submitFormInputEl.className = "submit-form-input";
    var submitFormButtonEl = document.createElement("button");
    submitFormButtonEl.className = "submit-form-button";
    submitFormButtonEl.textContent = "Submit";
    submitFormEl.appendChild(submitFormTextEl);
    submitFormEl.appendChild(submitFormInputEl);
    submitFormEl.appendChild(submitFormButtonEl);

    subTitleEl.appendChild(submitFormEl);

    // when i click submit, save user name and score into localstorage
    submitFormButtonEl.addEventListener("click", function () {
        // read input from input textarea
        playerName = submitFormInputEl.value;
        console.log(playerName);

        //scoreJSON = JSON.stringify(score);
        scores = {};

        // read from local storage
        var oldScores = localStorage.getItem("scores");
        console.log("old Array: " + oldScores);

        if (oldScores === null) {
            console.log("no other scores found!");

            scores[playerName] = score;
            localStorage.setItem("scores", JSON.stringify(scores));
            // console.log(localStorage.setItem("scores", JSON.stringify(scores)));
        } else {
            console.log("other scores found!");
            var scores = JSON.parse(oldScores);
            console.log(scores);
            console.log(playerName);
            scores[playerName] = score;
            console.log("new array: " + JSON.stringify(scores));
            localStorage.setItem("scores", JSON.stringify(scores));
        }
    });
}

var rightAnswer = function () {
    answers.push("right");
    console.log(answers);
};

var wrongAnswer = function () {
    answers.push("wrong");
    console.log(answers);
};



startScreen();

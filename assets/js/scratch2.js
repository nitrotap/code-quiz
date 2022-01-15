/* js script file for code quiz

*/

var time = 91;
var timerEl = document.querySelector("#timer");
timerEl.className = "timer";

var titleEl = document.querySelector("#main-title");
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
        "A simple coding quiz to test your coding knowledge! Try to answer the questions within the time limit, but keep in mind - wrong answers will cost you 10 points/seconds!";
    startButtonEl.innerHTML = "Start Quiz";
    startButtonEl.addEventListener("click", function () {
        countdown();
        subTitleEl.remove();
        startButtonEl.remove();
        question1();
    });
};

var answerStatus = function () {
    // create div element showing right or wrong answer
    answerStatusEl = document.createElement("div");
    console.log(answerStatusEl);
    answerStatusTextEl = document.createElement("h3");
    answerStatusTextEl.className = "answer-status";
    answerStatusEl.appendChild(answerStatusTextEl);

    var text = answers[answers.length - 1];
    console.log(text);
    // check answers array for last element
    answerStatusTextEl.textContent = text;

    console.log(answers[answers.length - 1]);
    titleEl.appendChild(answerStatusEl);
    return answerStatusEl;
}

var question1 = function () {
    console.log("question 1");
    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answerBox.appendChild(answer1);
    answerBox.appendChild(answer2);
    answerBox.appendChild(answer3);
    answerBox.appendChild(answer4);

    titleEl.className = "question-title";
    titleEl.textContent = "Commonly used data types do NOT include:";
    answer1.textContent = "1. strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";
    answer4.textContent = "4. numbers";
    titleEl.appendChild(answerBox);

    answer1.addEventListener("click", function () {
        wrongAnswer();
        question2();
        this.removeEventListener("click", answer1);
    });
    answer2.addEventListener("click", function () {
        wrongAnswer();
        question2();
        this.removeEventListener("click", answer2);
    });
    answer3.addEventListener("click", function () {
        rightAnswer();
        question2();
        this.removeEventListener("click", answer3);
    });
    answer4.addEventListener("click", function () {
        wrongAnswer();
        question2();
        this.removeEventListener("click", answer4);
    });
};

var question2 = function () {
    console.log("question 2");

    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answerBox.appendChild(answer1);
    answerBox.appendChild(answer2);
    answerBox.appendChild(answer3);
    answerBox.appendChild(answer4);

    titleEl.textContent =
        "The condition in an if/else statement is enclosed with __________.";
    answer1.textContent = "1. quotes";
    answer2.textContent = "2. curly brackets";
    answer3.textContent = "3. parenthesis";
    answer4.textContent = "4. square brackets";
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
    answerStatus();

};

var question3 = function () {
    console.log("question 3");

    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answerBox.appendChild(answer1);
    answerBox.appendChild(answer2);
    answerBox.appendChild(answer3);
    answerBox.appendChild(answer4);
    titleEl.textContent = "Arrays in JavaScript can be used to store __________.";
    answer1.textContent = "1. numbers and strings";
    answer2.textContent = "2. other arrays";
    answer3.textContent = "3. booleans";
    answer4.textContent = "4. all of the above";
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
    answerStatus();
};

var question4 = function () {
    console.log("question 4");

    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answerBox.appendChild(answer1);
    answerBox.appendChild(answer2);
    answerBox.appendChild(answer3);
    answerBox.appendChild(answer4);
    titleEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: __________.";
    answer1.textContent = "1. JavaScript";
    answer2.textContent = "2. terminal/bash";
    answer3.textContent = "3. for loops";
    answer4.textContent = "4. console.log";
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
    answerStatus();

};

var question5 = function () {
    console.log("question 5");

    question = {};

    var answerBox = document.createElement("div");
    answerBox.className = "answers";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answerBox.appendChild(answer1);
    answerBox.appendChild(answer2);
    answerBox.appendChild(answer3);
    answerBox.appendChild(answer4);
    titleEl.textContent = "String values must be enclosed within __________ when being assigned to variables.";
    answer1.textContent = "1. commas";
    answer2.textContent = "2. curly brackets";
    answer3.textContent = "3. quotes";
    answer4.textContent = "4. parenthesis";
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
    answerStatus();

}

var highScores = function () {
    // capture time remaining
    timeScore = time;
    titleEl.textContent = "All done!";
    titleEl.className = "end-title";
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

    //subTitleEl.textContent = "Your final score is: " + score + "\n" + "Your penalty is: " + timePenalty;

    subTitleEl.textContent = "Your final score is: " + score;
    titleEl.appendChild(subTitleEl);

    submitFormEl = submitForm();

    subTitleEl.appendChild(submitFormEl);

    answerStatus();

    subTitleEl.appendChild(answerStatusEl);


    // when i click submit, save user name and score into localstorage
    submitFormButtonEl.addEventListener("click", function handler() {
        // read input from input textarea
        playerName = submitFormInputEl.value;
        console.log(playerName);
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
            scores = JSON.parse(oldScores);
            scores[playerName] = score;
            localStorage.setItem("scores", JSON.stringify(scores));

            var highScoresEl = document.createElement("div");
            highScoresEl.className = "high-scores";

            var highScoresButtonRowEl = document.createElement("div");
            highScoresButtonRowEl.className = "flex-row";

            var backButtonEl = document.createElement("button");
            backButtonEl.className = "submit-form-button";
            backButtonEl.textContent = "Back";
            backButtonEl.addEventListener("click", function() {
                document.getElementById("home").click();
            });

            var clearScoresButtonEl = document.createElement("button");
            clearScoresButtonEl.className = "submit-form-button";
            clearScoresButtonEl.textContent = "Clear High Scores";
            clearScoresButtonEl.addEventListener("click", function() {
                localStorage.clear();
                highScores();
                clearScoresButtonEl.removeEventListener("click", clearScoresButtonEl);
            });

            highScoresButtonRowEl.appendChild(backButtonEl);
            highScoresButtonRowEl.appendChild(clearScoresButtonEl);

            // high scores list elements - class help
            var highScoresOrderedListElement = document.createElement("ol");

            // cannot iterate over an object
            // scores is initial and value. can use for loop

            var keyArray = Object.keys(scores); // puts all the keys into an array
            console.log(keyArray);

            // for loop to iterate over the array to get key values
            for (let i = 0; i < keyArray.length; i++) {
                keyArray = keyArray[i]; // iterating over the key
                keyValue = scores[keyArray]; // passing key into
                console.log(keyArray);
                console.log(keyValue);

                // use for loop to create elements
                highScoresListEl = document.createElement("li");

                // set the value of the new element to appropriate string

                value = keyArray + ": " + keyValue;
                highScoresListEl.innerHTML = value;

                highScoresOrderedListElement.appendChild(highScoresListEl);
            }

            submitFormEl.remove();
            subTitleEl.textContent = " High Scores: ";


            //highScoresOrderedListElement.appendChild(highScoresListEl1);
            // highScoresOrderedListElement.appendChild(highScoresListEl2);



            highScoresEl.appendChild(highScoresOrderedListElement);
            highScoresEl.appendChild(highScoresButtonRowEl);
            subTitleEl.appendChild(highScoresEl);
            answerStatusEl.remove();
            this.removeEventListener("click", handler);
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
    time -= 10;
};



var submitForm = function () {
    submitFormEl = document.createElement("div");
    submitFormEl.className = "submit-form";
    submitFormTextEl = document.createElement("h3");
    submitFormTextEl.className = "submit-text";
    submitFormTextEl.textContent = "Enter Initials: ";
    submitFormInputEl = document.createElement("input");
    submitFormInputEl.type = "text";
    submitFormInputEl.placeholder = "Enter Initials Here."
    submitFormInputEl.name = "submit-form-input";
    submitFormInputEl.className = "submit-form-input";
    submitFormButtonEl = document.createElement("button");
    submitFormButtonEl.className = "submit-form-button";
    submitFormButtonEl.textContent = "Submit";
    submitFormEl.appendChild(submitFormTextEl);
    submitFormEl.appendChild(submitFormInputEl);
    submitFormEl.appendChild(submitFormButtonEl);
    return submitFormEl;
}

startScreen();

// currently have it setup for each question is a separate function
    // wondering if i should have each question as an object
        // each question has its own 
            // titleEl.textContent, titleEl.className
            // answer1.textContent
            // answer2.textContent
            //answer3.textContent
            // answer4.
            // titleEl.appendChild(answerBox);


// build question as object
var question = function() {
    // each question has an eventlistener method
    // each question has different text content
}

// build high scores as an object
var highScores = function() {

}

// create div element showing right or wrong answer
var answerStatusEl = document.createElement("div");
var answerStatusTextEl = document.createElement("h3");

// check answers array for last element
answerStatusTextEl.textContent = answers[answers.length - 1];


    // create div element showing right or wrong answer
    answerStatusEl = document.createElement("div");
    console.log(answerStatusEl);
    answerStatusTextEl = document.createElement("h3");
    answerStatusEl.appendChild(answerStatusTextEl);

    var text = answers[answers.length - 1];
    console.log(text);
    // check answers array for last element
    answerStatusTextEl.textContent = text;

    console.log(answers[answers.length - 1]);
    titleEl.appendChild(answerStatusEl);

var timerEl = document.querySelector("#timer");

var time = 90;
var timer = function() {
    if (time > 0) {
        clearInterval(timer);
    }
    time -= 1;
    console.log(time);
    timerEl.innerHTML = time;
}

var countdownTimer = setInterval(timer, 1000);

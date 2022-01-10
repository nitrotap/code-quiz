var timerEl = document.querySelector("#timer");

time = 90;
var timer = function () {
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

countdown();

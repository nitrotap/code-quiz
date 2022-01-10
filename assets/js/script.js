var timerEl = document.querySelector("#timer");

time = 5;
var timer = function () {
  if (time > 0) {
    time--;
    timerEl.innerHTML = "<h2>Time: <h2>" + time;
  } else {
    clearInterval(timer);
  }
};

var countdown = function () {
  var intervalID = setInterval(timer, 1000);
};

countdown();

let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;
let flagTimer = false;
let timerId = null;

startBtn.addEventListener("click", function () {
  if (!flagTimer) {
    flagTimer = true;
    this.style.backgroundColor = "red";
    this.innerHTML = "Stop";
    clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
  } else {
    clearInterval(timerId);
    this.style.backgroundColor = "green";
    this.innerHTML = "Start";
    flagTimer = false;
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  startBtn.style.backgroundColor = "green";
  startBtn.innerHTML = "Start";
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = 0;
  flagTimer = false;
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;
  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

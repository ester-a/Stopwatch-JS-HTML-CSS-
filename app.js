document.addEventListener("DOMContentLoaded", function () {
  let minutes = 0;
  let seconds = 0;
  let miliseconds = 0;

  let minutesElement = document.querySelector("#minutes");
  let secondsElement = document.querySelector("#seconds");
  let milisecondsElement = document.querySelector("#miliseconds");
  let lapElement = document.querySelector("#laps-container")

  let startButton = document.querySelector("#start");
  let stopButton = document.querySelector("#stop");
  let resetButton = document.querySelector("#reset");
  let lapButton = document.querySelector("#lap");

  let interval;
  let i = 1;

  const startTimer = () => {
    miliseconds++;
    if (miliseconds < 10) {
      milisecondsElement.innerText = "0" + miliseconds;
    }
    if (miliseconds > 9) {
      milisecondsElement.innerText = miliseconds;
    }

    if (miliseconds > 99) {
      seconds++;
      secondsElement.innerText = "0" + seconds;
      miliseconds = 0;
      milisecondsElement.innerText = "00";
    }

    if (seconds > 9) {
      secondsElement.innerText = seconds;
    }

    if (seconds > 59) {
      minutes++;
      minutesElement.innerText = "0" + minutes;
      seconds = 0;
      secondsElement.innerText = "00";
    }

    if (minutes > 9) {
      minutesElement.innerText = minutes;
    }
  };

  startButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  //   startButton.onclick = () => {
  //     clearInterval(interval);
  //     interval = setInterval(startTimer, 10);
  // }

  stopButton.addEventListener("click", () => {
    clearInterval(interval);
  });

  lapButton.addEventListener("click", () => {
        const lap = document.createElement("p");
        lap.innerText = `lap ${i}: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${miliseconds < 10 ? "0" + miliseconds : miliseconds}`;
        lapElement.appendChild(lap);
        i++;
  })

  resetButton.addEventListener("click", () => {
    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    milisecondsElement.innerText = "00";
    secondsElement.innerText = "00";
    minutesElement.innerText = "00";
    lapElement.innerText = "";
  });
});

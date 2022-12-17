const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Start");
  },
  onTick() {
    console.log("Timer Just Tick Down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});

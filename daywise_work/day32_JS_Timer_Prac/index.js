class Timer {
  constructor(durationInput, startButton, pauseButton, callback) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    if (callback) {
      this.onStart = callback.onStart;
      this.onTick = callback.onTick;
      this.onComplete = callback.onComplete;
    }
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer Started');
  },
  onTick() {
    console.log('Tick Tock');
  },
  onComplete() {
    console.log('Completed');
  },
});

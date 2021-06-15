 // CLASS CHRONOMETER
 class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0; 
    this.millisecondsIntervalId = 0 
  }
  startClock(callback, printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);

    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }
  getMinutes() {
      let currentTimeMin = Math.floor(this.currentTime / 60);
      return currentTimeMin;
    }
    getSeconds() {
      let currentTimeSec = this.currentTime % 60;
      return currentTimeSec;
    }
    computeTwoDigitNumber(value) {
      return ("0" + value).slice(-2);
    }
    stop() {
      clearInterval(this.intervalId);
      clearInterval(this.millisecondsIntervalId);
    }
    reset() {
      this.currentTime = 0;
      this.currentMilliseconds = 0;
    }
    split() {
      let minutes = this.computeTwoDigitNumber(this.getMinutes());
      let seconds = this.computeTwoDigitNumber(this.getSeconds());
      let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds); // <= BONUS 
      let records = `${minutes}:${seconds}:${milliseconds}`
      return records;
    }
  };
  const chronometer = new Chronometer();
  // DOM FOR TIMER
  let minDecElement = document.getElementById('minDec');
  let minUniElement = document.getElementById('minUni');
  let secDecElement = document.getElementById('secDec');
  let secUniElement = document.getElementById('secUni');
  let milDecElement = document.getElementById('milDec');
  let milUniElement = document.getElementById('milUni');
  let splitsElement = document.getElementById('splits');
  // FUNCTIONS
  const printTime = () => {
    printMinutes();
    printSeconds();
    printMilliseconds()
  };  
  const printMinutes = () => {
    let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
  };   
  const printSeconds = () => {
    let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
  };
  const printMilliseconds = () => {
    let milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMilliseconds);
    milDecElement.innerHTML = milliseconds[0];
    milUniElement.innerHTML = milliseconds[1];
  };
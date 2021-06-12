// EVENT LISTENER LET'S PLAY BUTTON
document.querySelector("#startbtn").addEventListener("click", function() {
    game()
    start()
    chronometer.startClock(printTime, printMilliseconds);
   // setStopBtn();
   // setSplitBtn();
    
    // Initialize my Ball
    let count = 0 // begin countdown
    let intervaloCores = setInterval(setColor, 1000); // change colors
    
    //Ball Class
    class Circle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }
    //Draw a circle
    draw(context) {
        context.beginPath();
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false)
        context.strokeStyle = "white"
        context.linewidth = 3
        context.fillStyle = this.color
        context.fill();
        context.stroke();
        context.closePath();
    }
    //Move the circle
    moveBall(){
        this.xpoint = moveRandom(canvas.width);
        this.ypoint = moveRandom(canvas.height);  
    }
      //See User Click Event
    clickCircle(xmouse, ymouse) {
        const distance = Math.sqrt(
            ( (xmouse - this.xpoint) * (xmouse - this.xpoint)) + ((ymouse - this.ypoint) * (ymouse - this.ypoint))
            );
            if (distance < this.radius) {
                console.log("Dentro da bola")
            } else {
                gameOver()
                chronometer.stop();
            }
    
        }
    }
    // Initialize my Ball
    let myBall = new Circle(100,100,50, "white")
    // Draw my ball
    myBall.draw(ctx)
    //Get a random number
    function moveRandom(axis) {
    return Math.floor(Math.random()*axis);
    }
    //Increase difficulty
    let seconds = 1500
    let gameTime = 15000
    //Increase difficulty
    function level(difficulty, seconds) {
      if (difficulty === "easy") {
          seconds
      } else if (difficulty === "medium") {
          seconds -= 500
      } else {
          seconds -= 400
      }
    }
    let ballMoving = setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      myBall.moveBall()
      myBall.draw(ctx)
    }, seconds)

    let timeOut = setTimeout(function(){ 
      clearInterval(ballMoving); 
    }, gameTime);

    // Start Button
    function start() {
        level("easy", 10000)
        setTimeout( function() {level("medium"), 10000}, 15000 )
        setTimeout( function() {level("hard"), 10000}, 25000  )
    }
    // Set background color
    function setColor() {
        canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
    }
    // Stop button
    function gameOver() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundColor = "red"
        startText.style.display = 'none';
        box1.style.display = "none";
        box2.style.display = "none";
        clearInterval(ballMoving)
        clearInterval(intervaloCores)
        clearTimeout(timeOut)

        finalText.style.display = "block";
    }
    //EVENT LISTENER PARA O CLICK
    canvas.addEventListener("click", (event) => {
    const c = canvas.getBoundingClientRect();
    const x = event.clientX - c.left
    const y = event.clientY - c.top
    myBall.clickCircle(x,y)
    })
});


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
      console.log(currentTimeMin)
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
      // BONUS =>
      this.currentMilliseconds = 0;
  
    }
  
    split() {
      let minutes = this.computeTwoDigitNumber(this.getMinutes());
      let seconds = this.computeTwoDigitNumber(this.getSeconds());
      let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds); // <= BONUS 
      let records = `${minutes}:${seconds}:${milliseconds}`
      return records;
    }
  }
  const chronometer = new Chronometer();

const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

let minDecElement = document.getElementById('minDec');
let minUniElement = document.getElementById('minUni');
let secDecElement = document.getElementById('secDec');
let secUniElement = document.getElementById('secUni');
let milDecElement = document.getElementById('milDec');
let milUniElement = document.getElementById('milUni');
let splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMilliseconds);
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.className = "list-item";
  newLi.innerHTML = `${chronometer.split()}`;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}



// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')) {
  // if (btnRightElement.className.indexOf('reset') > 0) {
    clearSplits();
    chronometer.reset();
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;
  } else {
    printSplit();
  }
}); 

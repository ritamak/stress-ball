// EVENT LISTENER LET'S PLAY BUTTON
document.querySelector("#startbtn").addEventListener("click", function() {
  let seconds = 1500; // INCRASE DIFFICULTY
  let scoreBoard = []; // SCORE BOARD ARRAY
  let lastScores; // FOR THE SCORE BOARD IN CANVAS
  let count = 0; // FOR KEEPING SCORES
  game(); // START CANVAS
  start(); // START GAME
  chronometer.startClock(printTime, printMilliseconds); // START CHRONOMETER
  let intervaloCores = setInterval(setColor, 1000); // CHANGE COLORS
  // CLASS CIRCLE
  class Circle {
    constructor(xpoint, ypoint, radius, color) {
      this.xpoint = xpoint;
      this.ypoint = ypoint;
      this.radius = radius;
      this.color = color;
    }
    // DRAW A CIRCLE
    draw(context) {
      context.beginPath();
      context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false)
      context.strokeStyle = "white"
      context.linewidth = 3
      context.fillStyle = this.color
      context.shadowBlur = 10;
      context.shadowColor = "black";
      context.fill();
      context.stroke();
      context.closePath();
    }
    // MOVE THE CIRCLE TO A RANDOM PLACE
    moveBall(){
      this.xpoint = Math.floor(Math.random() * (canvas.width - 100)) + 50;
      this.ypoint = Math.floor(Math.random() * (canvas.height - 100)) + 50;  
    }
    // SEE USER CLICK EVENT
    clickCircle(xmouse, ymouse) {
      const distance = Math.sqrt( ( ( xmouse - this.xpoint ) * ( xmouse - this.xpoint ) ) + ( ( ymouse - this.ypoint ) * ( ymouse - this.ypoint ) ) );
      if (distance < this.radius) {
        count++
      } else {
        gameOver()
      }
    }
  }
  // INITIALIZE MY BALL
  let myBall = new Circle(60, 60, 50, "white");
  // DRAW MY BALL
  myBall.draw(ctx);
  // LEVEL FUNCTION
  function level(difficulty) {
    if (difficulty === "easy") {
      seconds = 2000;
      box1.innerHTML = "level|easy";
    } else if (difficulty === "medium") {
      seconds = 1000;
      box1.innerHTML = "level|medium";
    } else {
      seconds = 500;
      box1.innerHTML = "level|hard" ;           
    }
    ballMoving();
    setTimeout(function(){ 
      clearInterval(moving); 
    }, 10000);
  };
  // INTERVAL FOR BALL MOVING
  var moving;
  function ballMoving() {
    moving = setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      myBall.moveBall();
      myBall.draw(ctx);
    }, seconds)
  };
  // START BUTTON
  function start() {
    level("easy");
    setTimeout( function() {level("medium")}, 10000 );
    setTimeout( function() {level("hard")}, 20000  );
  };
  // CHANGE BACKGROUND COLOR
  function setColor() {
    canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
  };
  // GAME OVER SCREEN
  const gameOver = () => {
    themeAudio.pause()
    if (box1.style.display === "block") {
      scoreBoard.push(count)
      console.log(scoreBoard)
      lastScores = scoreBoard.join(' | ')
    } else {
      null
    }
  // DOM TO HIDE / SHOW
  rstrt.style.display = "block";
  box1.style.display = "none";
  box2.style.display = "none";
  startText.style.display = 'none';
  // CLEAR INTERVALS & TIMEOUTS & CHRONO
  clearInterval(intervaloCores); // STOP CHANGING BACKGROUND COLORS
  clearInterval(moving); // STOP BALL FROM MOVING
  for (i=0; i<10000; i++) {
    window.clearTimeout(i);
  }
  gameOverTheme.load(); // RESTART GAME MUSIC
  gameOverTheme.play() // PLAY GAME MUSIC
  gameOverTheme.volume = 0.1; // VOLUME OF GAME MUSIC
  chronometer.stop()
  // VARIABLES NEEDED FOR CANVAS TEXT
  let phrase1 = `score: ${count} clicks`;
  let phrase2 = `time: ${chronometer.split()}`;
  let inputted = document.getElementsByTagName("input")[0].value;
  let userName = `NICE TRY ${inputted.toUpperCase()}!`;
  let scores = `last scores: ${lastScores}`
  //c CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "gold";
  ctx.font = "800 70px Courier New";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText(userName, canvas.width/2, canvas.height/3.5);
  ctx.font = " 30px Courier New";
  ctx.textAlign = "center";
  ctx.strokeText(phrase1, canvas.width/2, canvas.height/2.3);
  ctx.font = " 30px Courier New";
  ctx.textAlign = "center";
  ctx.strokeText(phrase2, canvas.width/2, canvas.height/1.8);
  if (scoreBoard.length > 1) {
    ctx.font = " 30px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText(scores, canvas.width/2, canvas.height/1.5);
  }
  clearInterval(this.intervalId);
  clearInterval(this.millisecondsIntervalId);
  ctx.strokeText("wanna try again?", canvas.width/2, canvas.height/1.2);
};
  //EVENT LISTENER FOR THE MOUSE CLICK IN THE BALL / CANVAS 
  canvas.addEventListener("click", (event) => {
    const c = canvas.getBoundingClientRect();
    const x = event.clientX - c.left;
    const y = event.clientY - c.top;
    myBall.clickCircle(x,y);
  });
  // EVENT LISTENER FOR RESTART BUTTON
  document.getElementById("rstrt").addEventListener("click", function() {
  // FUNCTION FOR THE RESTART BTN
  gameOverTheme.pause()  
  count = 0
  chronometer.stop()
  chronometer.reset()
  document.getElementById("minDec").innerHTML = 0
  document.getElementById("minUni").innerHTML = 0
  document.getElementById("secDec").innerHTML = 0
  document.getElementById("secUni").innerHTML = 0
  themeAudio.load()
  myBall.draw(ctx) // DRAW BALL
  game(); // START CANVAS
  start(); // START GAME
  setInterval(setColor, 1000) // COLOR INTERVAL
  chronometer.startClock(printTime, printMilliseconds); // start chronometer
  });
});


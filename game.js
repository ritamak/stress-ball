// EVENT LISTENER LOAD
window.addEventListener("load", function(event) {
  // EVENT LISTENER LET'S PLAY BUTTON
  document.querySelector("#startbtn").addEventListener("click", function() {
      game(); // start canvas
      start(); // start game
      chronometer.startClock(printTime, printMilliseconds); 
      // FOR KEEPING SCORES
      let count = 0; 
      // CHANGE COLORS
      let intervaloCores = setInterval(setColor, 1000);  
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
          ctx.shadowBlur = 10;
          ctx.shadowColor = "black";
          context.fill();
          context.stroke();
          context.closePath();
      }
      // MOVE THE CIRCLE
      moveBall(){
          this.xpoint = moveRandom(canvas.width - 300);
          this.ypoint = moveRandom(canvas.height - 300);  
      }
      // SEE USER CLICK EVENT
      clickCircle(xmouse, ymouse) {
          const distance = Math.sqrt(
              ( (xmouse - this.xpoint) * (xmouse - this.xpoint)) + ((ymouse - this.ypoint) * (ymouse - this.ypoint))
              );
              if (distance < this.radius) {
                count++
                canvas.style.cursor = "grabbing";
                canvas.style.cursor = "grab";
              } else {
                  gameOver()
              }
          }
      }
      // INITIALIZE MY BALL
      let myBall = new Circle(100,100,50, "white");
      // DRAW MY BALL
      myBall.draw(ctx);
      // GET A RANDOM NUMBER
      function moveRandom(axis) {
      return Math.floor(Math.random()*axis);
      };
      // INCRASE DIFFICULTY
      let seconds = 1500;
      let gameTime = 15000;
      // LEVEL FUNCTION
      function level(difficulty, seconds) {
        if (difficulty === "easy") {
            seconds
        } else if (difficulty === "medium") {
            seconds -= 500;
        } else {
            seconds -= 400;
        }
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
      ballMoving()
      // TIMEOUT TO START ANOTHER LEVEL
      let timeOut = setTimeout(function(){ 
        clearInterval(moving); 
      }, gameTime);
      // START BUTTON
      function start() {
          level("easy", 15000);
          setTimeout( function() {level("medium"), 10000}, 15000 );
          setTimeout( function() {level("hard"), 10000}, 25000  );
      };
      // CHANGE BACKGROUND COLOR
      function setColor() {
          canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
      };
      // GAME OVER SCREEN
      const gameOver = () => {
        // DOM TO HIDE / SHOW
        rstrt.style.display = "block";
        box1.style.display = "none";
        box2.style.display = "none";
        startText.style.display = 'none';
        // CLEAR INTERVALS & TIMEOUTS & CHRONO
        clearInterval(intervaloCores);
        clearInterval(moving);
        clearTimeout(timeOut);
        gameOverAudio.play();
        chronometer.stop()
        // VARIABLES NEEDED FOR CANVAS TEXT
        let phrase1 = `score: ${count} clicks`;
        let phrase2 = `time: ${chronometer.split()}`;
        let inputted = document.getElementsByTagName("input")[0].value;
        let userName = `NICE TRY ${inputted.toUpperCase()}!`;
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
        clearInterval(this.intervalId);
        clearInterval(this.millisecondsIntervalId);
        ctx.strokeText("wanna try again?", canvas.width/2, canvas.height/1.3);
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
        chronometer.stop()
        chronometer.reset() 
        game(); // start canvas
        start(); // start game
        myBall.draw(ctx)
        ballMoving()
        canvas.addEventListener("click", (event) => {
          const c = canvas.getBoundingClientRect();
          const x = event.clientX - c.left;
          const y = event.clientY - c.top;
          myBall.clickCircle(x,y);
          });
          canvas.style.backgroundColor = "gold";
          function setColor2() {
            canvas.style.backgroundColor = canvas.style.backgroundColor == "gold" ? "olive" : "gold";
          }
          count = 0
        chronometer.startClock(printTime, printMilliseconds); // start chronometer
  });
  });
  });
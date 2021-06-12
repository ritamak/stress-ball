//Create my canvas
const canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
// Variaveis
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
        const distance = 
        Math.sqrt(
            ( (xmouse - this.xpoint) * (xmouse - this.xpoint)) + ((ymouse - this.ypoint) * (ymouse - this.ypoint))
        );
        if (distance < this.radius) {
            return console.log("Dentro da bola")
        } else {
            return console.log("Fora da bola")
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
function level(difficulty, gameTime) {
    let seconds = 0
    if (difficulty === "easy") {
        seconds = 1500
    } else if (difficulty === "medium") {
        seconds = 1000
    } else {
        seconds = 900
    }
    let id = setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myBall.moveBall()
        myBall.draw(ctx)
    }, seconds)
    setTimeout(function(){ 
        clearInterval(id); 
    }, gameTime);
}
// Start Button
function start() {
    level("easy", 15000)
    setTimeout( function() {level("medium", 10000)}, 15000 )
    setTimeout( function() {level("hard", 10000)}, 25000  )
}
// Set background color
function setColor() {
  canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
}
// Stop button
function stop() {
  clearInterval(intervaloCores);
  clearInterval(id)
}
//EVENT LISTENER PARA O CLICK
canvas.addEventListener("click", (event) => {
    const c = canvas.getBoundingClientRect();
    const x = event.clientX - c.left
    const y = event.clientY - c.top
    myBall.clickCircle(x,y)
})
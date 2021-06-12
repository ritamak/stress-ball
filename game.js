// DOM
let canvas = document.querySelector("#myCanvas");
let startBtn = document.querySelector("#startbtn")
// AUDIO
let startAudio = new Audio("https://res.cloudinary.com/manishp/video/upload/v1623305320/Horizon_Zero_Dawn_OST_-_Years_Of_Training_badkhk.mp3")
let gameOverAudio = new Audio(" https://res.cloudinary.com/manishp/video/upload/v1615874740/aom/home_bhfqfk.mp3")
// CANVAS
canvas.style.display = 'block';
canvas.style.border = '2px solid black'
canvas.style.backgroundColor = "olive"
// PAINTBRUSH
let ctx = canvas.getContext('2d')
//CANVAS TEXT
ctx.font = "800 50px Courier New";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Welcome to stress|ball", canvas.width/2, canvas.height/3.5);
ctx.font = " 30px Courier New";
ctx.textAlign = "center";
ctx.strokeText("The rules are simple:", canvas.width/2, canvas.height/2.3);
ctx.font = " 30px Courier New";
ctx.textAlign = "center";
ctx.strokeText("Every time a ball appears in your screen, you have to click it.", canvas.width/2, canvas.height/1.9);
ctx.font = "30px Courier New";
ctx.textAlign = "center";
ctx.strokeText("If you don't you will loose. Are you stressed enough?", canvas.width/2, canvas.height/1.5);
// EVENT LISTENER LET'S PLAY BUTTON
document.querySelector("#startbtn").addEventListener("click", function() {
    startText.style.display = 'none';
    startAudio.play()
    startAudio.volume = 0.1
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setInterval(() => {
        canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
    }, 500);

    
    //BEGIN
    start()
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
                console.log("Fora da bola")
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
});


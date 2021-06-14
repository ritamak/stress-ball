// DOM
let canvas = document.querySelector("#myCanvas");
let startBtn = document.querySelector("#startbtn")
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#sphere")
let final = document.querySelector("#final")
let finalText = document.querySelector("#finalText")
let rstrt = document.querySelector("#rstrt")
// AUDIO
let startAudio = new Audio("https://res.cloudinary.com/manishp/video/upload/v1623305320/Horizon_Zero_Dawn_OST_-_Years_Of_Training_badkhk.mp3")
let gameOverAudio = new Audio(" https://res.cloudinary.com/manishp/video/upload/v1615874740/aom/home_bhfqfk.mp3")
// CANVAS
canvas.style.display = 'block';
canvas.style.border = '2px solid black'
canvas.style.backgroundColor = "olive"
// PAINTBRUSH
let ctx = canvas.getContext('2d')
// HIDE BOXES
box1.style.display = "none";
box2.style.display = "none";
final.style.display = "none";
finalText.style.display = "none";
rstrt.style.display = "none";
// CANVAS TEXT

const begin = () => {
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeStyle = "white";
    ctx.strokeText("studies show that squeezing a ball can raise your heart rate", 
    canvas.width/2, canvas.height/5.0);
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText("and increase the oxygen levels in your brain", canvas.width/2, canvas.height/3.8);
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText("as a result, your heart will pump harder and thus provide better blood circulation", 
    canvas.width/2, canvas.height/3.0);
    ctx.font = "800 30px Courier New";
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("squeeze (click) in the ball when it appears on your screen", canvas.width/2, canvas.height/2.1);
    ctx.font = "800 30px Courier New";
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("if you fail to squeeze it, you will lose", canvas.width/2, canvas.height/1.7);
    ctx.font = "1000 50px Courier New";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("ARE YOU READY?", canvas.width/2, canvas.height/1.2);

}
begin()
// GAME DISPLAY
const game = () => {
    startText.style.display = 'none';
    box1.style.display = "block";
    box1.innerText = "level 1"
    box1.style.textAlign = "center";
    box1.style.backgroundColor = "#edecdf";
    box2.style.display = "block";
    rstrt.style.display = "none";
    startAudio.play()
    startAudio.volume = 0.1
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
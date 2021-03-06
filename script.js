// DOM
let canvas = document.querySelector("#myCanvas");
let startBtn = document.querySelector("#startbtn");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#sphere");
let rstrt = document.querySelector("#rstrt");
let themeAudio = document.getElementById("myThemeSong");
let gameOverTheme = document.getElementById("myGameoverTheme");
//CURSOR 
canvas.style.cursor = "grab";
rstrt.style.cursor = "pointer";
startBtn.style.cursor = "pointer";
// PAINTBRUSH
let ctx = canvas.getContext('2d')
let seconds = 1500; // INCRASE DIFFICULTY
let scoreBoard = []; // SCORE BOARD ARRAY
let lastScores; // FOR THE SCORE BOARD IN CANVAS
let count = 0; // FOR KEEPING SCORES
// CANVAS TEXT
const begin = () => {
    box1.style.display = "none";
    box2.style.display = "none";
    rstrt.style.display = "none";
    canvas.style.display = 'block';
    canvas.style.border = '2px solid black';
    canvas.style.backgroundColor = "olive";
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeStyle = "white";
    ctx.strokeText("studies show that squeezing a ball can raise your heart rate", canvas.width/2, canvas.height/5.0);
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText("and increase the oxygen levels in your brain", canvas.width/2, canvas.height/3.8);
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText("as a result, your heart will pump harder and thus provide better blood circulation", canvas.width/2, canvas.height/3.0);
    ctx.font = "800 30px Courier New";
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("squeeze (click in) the WHITE ball", canvas.width/2, canvas.height/2.2);
    ctx.font = "800 30px Courier New";
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("when it appears on your screen", canvas.width/2, canvas.height/1.8);
    ctx.font = "800 30px Courier New";
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("if you fail to squeeze it, you will lose", canvas.width/2, canvas.height/1.5);
    ctx.font = "1000 50px Courier New";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillText("ARE YOU READY?", canvas.width/2, canvas.height/1.2);
};
window.addEventListener("load", function(event) {
    begin();
});
// GAME DISPLAY
const game = () => {
    startText.style.display = 'none';
    box1.style.display = "block";
    box1.style.textAlign = "center";
    box1.style.backgroundColor = "#edecdf";
    box2.style.display = "block";
    rstrt.style.display = "none";
    themeAudio.play();
    themeAudio.volume = 0.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
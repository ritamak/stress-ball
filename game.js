// DOM
let canvas = document.querySelector("#myCanvas");
let startBtn = document.querySelector("#startbtn")
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#sphere")
let final = document.querySelector("#final")
let finalText = document.querySelector("#finalText")

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
// CANVAS TEXT
const begin = () => {
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
}
begin()
// GAME DISPLAY
const game = () => {
    startText.style.display = 'none';
    box1.style.display = "block";
    box1.innerText = "You are on level 1 :: You have 2 points"
    box1.style.textAlign = "center";
    box1.style.backgroundColor = "#edecdf";
    box2.style.display = "block";
    startAudio.play()
    startAudio.volume = 0.1
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// GAME OVER SCREEN
const end = () => {
    canvas.style.backgroundColor = "gold"
    let phrase1 = `Your score was ${teste}`
    ctx.font = "800 70px Courier New";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("NICE TRY!", canvas.width/2, canvas.height/3.0);
    ctx.font = " 30px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText(phrase1, canvas.width/2, canvas.height/1.9);
    ctx.font = "30px Courier New";
    ctx.textAlign = "center";
    ctx.strokeText("wanna try again?", canvas.width/2, canvas.height/1.5);
}

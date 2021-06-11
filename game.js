const canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
ball(80,80);

// Variaveis
let count = 0
let intervaloCores = setInterval(setColor, 500);
let posicaoInicial = 0
let circles = [{x:50,y:50}]
let x = moveRandom(canvas.width);
let y = moveRandom(canvas.height);
console.log()
let posicaoY = y

console.log(moveBall())
console.log(+moveRandom())

function ball(x,y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI); 
  ctx.fill();
  ctx.strokeStyle = "white"
  ctx.stroke()
  ctx.closePath()
}

function moveBall(){  
  let x = moveRandom(canvas.width);
  console.log(x)
  let y = moveRandom(canvas.height);
  console.log(y)
  ball(x, y);  
}

function moveRandom(axis) {
 return Math.floor(Math.random()*axis);
}

function level(dificulty, gameTime) {
    let segundos = 0
    if (dificulty === "easy") {
        segundos = 1500
    } else if(dificulty === "medium") {
        segundos = 1000
    } else {
        segundos = 900
    }
    let id = setInterval(function() {
        moveBall()
    }, segundos)
    setTimeout(function(){ 
        clearInterval(id); 
    }, gameTime);
}

function start() {
    level("easy", 15000)
    setTimeout( function() {level("medium", 10000)}, 15000 )
    setTimeout( function() {level("hard", 10000)}, 25000  )
    
   /* 
    let ignoreClickOnMeElement = document.getElementById('someElementID');
    document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        //Do something click is outside specified element
    }
});*/
}

function setColor() {
  canvas.style.backgroundColor = canvas.style.backgroundColor == "olive" ? "gold" : "olive";
}

function stop() {
  clearInterval(intervaloCores);
  clearInterval(id)
}
function hit() {
    count++
    moveBall()
}

function gameOver(){

}

//innerText = 
//// carrega para começar ; print time e result ;; parabens, o teu resultado é ......
/// botao stop nao funciona 
//// event listener mouse e de trackpad
//// se nao carregar, gameover
//// se carregar, ponto
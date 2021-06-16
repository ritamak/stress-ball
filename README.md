# stress|ball
- http://github.com/ritamak/stress-ball
- https://ritamak.github.io/stress-ball/

## Description
stress|ball is a game to test how quick is your reaction. 
Every time a white ball appears in the user screen (in a random place), the user has to click on it. If the user fails to click inside the white ball, the user will lose the game.
There are three levels. The "easy", the "medium" and the "hard". The velocity of the ball appearing and moving to a different random place increases with every new level.

stress|ball has a very minimalistic layout. It is for every one, but it is design for an older audience or young children.

## MVP
- game screen with a ball moving to random places,
- background alternating between two colors to make a more stressful environment for the user,
- game over screen if the user fails to click inside the white ball,
- restart button

## Backlog
- splash screen with the game introduction,
- increasing dificulty in the game,
- count of the number of time he user clicks in the white ball,
- timer to track the minutes/seconds of the game,
- add a black ball in the last level,
- last scores of the user, if the user plays more than one time

## Data structure

### scipt.js
- script - build the dom,
- script - change the cursor,
- script - draw canvas,
- script - build canvas splash screen,
- scirpt - addEventListener (load),
- script - build canvas game screen

### game.js
- game - addEventListener (start button),
- game - Class Circle,
- game - initialize ball,
- game - draw ball,
- game - function level,
- game - function ballMoving,
- game - function blackBallMoving,
- game - function start,
- game - function setColor,
- game - function gameOver,
- game - addEventListener (mouse),
- game - addEventListener (restart button),

### chronometer.js
- chrono - class Chronometer,
- chrono - DOM for Chronometer,
- chrono - function printTime,
- chrono - function printMinutes,
- chrono - function printSeconds,
- chrono - function printMilliseconds,

## States y States Transitions
- splashScreen,
- gameScreen,
- gameOverScreen

## Task
- build canvas splash screen,
- build input for user name,
- event listener for the start button,
- build canvas game screen,
- draw a white ball,
- function for moving the ball to random places,
- count game time,
- function to increase level,
. draw a black ball ,
- event listener for the mouse click inside/outside the ball,
- build canvas game over screen,
- count user scores,
- event listener for the restart button

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/1MrisE8_VyAAF-cb3-Y77vcnR_C_IVTVnGCS6jEMZbpk/edit?usp=sharing)

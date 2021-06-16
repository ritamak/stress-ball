# Project's name
http://github.com/ritamak/stress-ball

## Description
Stress game is a game to test how quick is your reaction. 
Every time a white ball appears in the user screen (in a random place), the user has to click on it. If the user fails to click inside the white ball, the user will lose the game.
There are three levels. The "easy", the "medium" and the "hard". The velocity of the ball appearing and moving to a different random place increases with every new level.

STRESS BALL has a very minimalistic layout. It is for every one, but it is design for an older audience or young children.

## MVP
- Game screen with a ball moving to random places
- Background alternating between two colors to make a more stressful environment for the user.
- Game over screen if the user fails to click inside the white ball.
- Restart button

## Backlog
- Splash screen with the game introduction.
- Increasing dificulty in the game
- Count of the number of time he user clicks in the white ball.
- timer to track the minutes/seconds of the game.
- Add a black ball in the last level
- last scores of the user, if the user plays more than one time.

## Data structure
- scipt.js

- game.js

- chronometer.js

## States y States Transitions
- splashScreen
- gameScreen
- gameOverScreen

## Task
- script - build the dom
- script - change the cursor
- script - draw canvas
- script - build canvas splash screen
- scirpt - addEventListener (load)
- script - build canvas game screen

- game - addEventListener (start button)
- game - Class Circle
- game - initialize ball
- game - draw ball
- game - function level
- game - function ballMoving
- game - function blackBallMoving
- game - function start
- game - function setColor
- game - function gameOver
- game - addEventListener (mouse)
- game - addEventListener (restart button)

- chrono - class Chronometer
- chrono - DOM for Chronometer
- chrono - function printTime
- chrono - function printMinutes
- chrono - function printSeconds
- chrono - function printMilliseconds

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/1MrisE8_VyAAF-cb3-Y77vcnR_C_IVTVnGCS6jEMZbpk/edit?usp=sharing)

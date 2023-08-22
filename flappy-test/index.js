{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!DOCTYPE html>\
<html>\
<head>\
  <title>Flappy Bird</title>\
  <style>\
    #gameArea \{\
      width: 400px;\
      height: 600px;\
      border: 1px solid black;\
      position: relative;\
      overflow: hidden;\
    \}\
    #bird \{\
      width: 50px;\
      height: 50px;\
      background-color: #FF5733;\
      position: absolute;\
    \}\
  </style>\
</head>\
<body>\
  <div id="gameArea">\
    <div id="bird"></div>\
  </div>\
\
  <script>\
    const gameArea = document.getElementById("gameArea");\
    const bird = document.getElementById("bird");\
    let birdTop = 250; // Initial position of the bird\
    let gravity = 2; // Gravity applied to the bird\
    let isGameOver = false;\
\
    function jump() \{\
      if (isGameOver) return;\
      birdTop -= 40; // Move the bird up\
      bird.style.top = birdTop + "px";\
    \}\
\
    function gameLoop() \{\
      if (birdTop < gameArea.clientHeight - bird.clientHeight) \{\
        birdTop += gravity; // Apply gravity to the bird\
        bird.style.top = birdTop + "px";\
      \} else \{\
        // Bird hits the ground, game over\
        isGameOver = true;\
      \}\
\
      if (!isGameOver) \{\
        requestAnimationFrame(gameLoop);\
      \}\
    \}\
\
    gameLoop();\
\
    // Event listener for mouse click\
    gameArea.addEventListener("click", jump);\
  </script>\
</body>\
</html>\
}
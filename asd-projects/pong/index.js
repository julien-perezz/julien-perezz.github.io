/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

/* 
1. All code in proper sections (setup, core, helpers, etc.) - 5 points
2. Use objects to store data - 5 points
3. Use comments to describe setup and functions - 5 points
4. Avoid magic numbers - 5 points
5. Use helper functions to separate concerns - 5 points
6. Generalize functions (i.e. only one collision detection function for all ball-paddle collisions; hard-coding to check both in a single function doesn't count) - 5 points
*/ 

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "O" : 79,        // rightPaddle Up
    "L" :  76,      // rightPadde Down 
    "W": 87,       // leftPaddle Up 
    "S" : 83,     // leftPaddle Down 
  };


  var ball = gameItem("#ball");
  var leftPaddle = gameItem("#leftPaddle"); 
  var rightPaddle = gameItem("#rightPaddle"); 

  var maxPaddleY = board.height - leftPaddle.height; 

  var maxBallX = board.width - ball.width; 
  var maxBallY = board.height - ball.height; 

  

  
  // Game Item Objects
  ball.speedX = 5;
  ball.speedY = 5;


  ball.x += ball.speedX;
  ball.y += ball.speedY;

 
  

  


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp);                 // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameITem(); 
    redrawGameItem(); 

    if (doCollide(leftPaddle, ball) === true) {
      ball.speedX *= -1;
    }
    else if (doCollide(rightPaddle, ball) === true) {
      ball.speedX *= -1;
    }
    
  }
  counter1 = playerOneScore;

displayData(playerOneScore); 
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    if (event.which === KEY.O) {
      rightPaddle.speedY = -5; 
      
    }
    else if (event.which === KEY.L) {
      rightPaddle.speedY = 5;
      
    }
    else if ( event.which === KEY.W) {
      leftPaddle.speedY = -5;
      
    }
    else if (event.which === KEY.S) {
      leftPaddle.speedY = 5;
       
    }
   
  }

  function handleKeyUp(event) {
    if (event.which === KEY.O) {
      rightPaddle.speedY = 0; 
      
    }
    else if (event.which === KEY.L) {
      rightPaddle.speedY = 0;
      
    }
    else if ( event.which === KEY.W) {
      leftPaddle.speedY = 0;
      
    }
    else if (event.which === KEY.S) {
      leftPaddle.speedY = 0;
       
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function gameItem(id) {
    return {
      
      id: id, 
      x: parseFloat($(id).css("left")),
      y: parseFloat($(id).css("top")),
      width: $(id).width(), 
      height: $(id).height(),
      speedX: 0,
      speedY: 0
      
      
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameITem() {
    // defining the maximum the ball or paddles can reach before they stop




    ball.x += ball.speedX;
    ball.y += ball.speedY;

    rightPaddle.y += rightPaddle.speedY;
    leftPaddle.y += leftPaddle.speedY;


   if (leftPaddle.y > 370 ) {
     leftPaddle.y = 0; 
   }
   else if (leftPaddle.y === -10) {
     leftPaddle.y = 360;
   }
   else if (rightPaddle.y > 370) {
     rightPaddle.y = 0;
   }
   else if(rightPaddle.y === -10) {
     rightPaddle.y = 360;
   }

   if (ball.y === 370) {
     ball.speedY += -5;
   }
   else if (ball.y === - 20) {
     ball.speedY += 5; 
   }
   var counter1 = 0; 
   var counter2 = 0; 

   if (ball.x === 300) {
     counter1++;
   }
   else if (ball.x === -20) {
     counter2++;
   }




    
  }
  
  function redrawGameItem() {
  //Redraw the 3 game items: left paddle, right paddle, and ball 

  $(ball.id).css("top", ball.y);   
  $(ball.id).css("left", ball.x);
  $(leftPaddle.id).css("top", leftPaddle.y);
  $(rightPaddle.id).css("top", rightPaddle.y);


  
  }

  function doCollide(paddle, ball) {
   paddle.left = paddle.x;
   paddle.right = paddle.x + paddle.width; 
   paddle.top = paddle.y;
   paddle.bottom = paddle.y + paddle.height; 

  ball.left = ball.x;
  ball.top = ball.y;
  ball.right = ball.x + ball.width;
  ball.bottom = ball.y + ball.height; 


  var maxPaddleY = board.height - leftPaddle.height;



    // return true if the objects do collide
    if (paddle.left < ball.right && paddle.right > ball.left && paddle.top < ball.bottom && paddle.bottom > ball.top) {
      return true; 
    }
    else {
      return false; 
    }

    
  };

  
}


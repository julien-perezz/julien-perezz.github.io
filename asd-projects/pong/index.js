/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "ENTER" : 13,
    "DOWN" :  40,
    "UP": 38,
    "LEFT" : 37,
    "RIGHT" : 39

  };

  
  // Game Item Objects
  var positionX = 0; // coordinate for the location of the box on the x axis
  var speedX = 0; // spped for box along x axis 

  var positionY = 0; // coordinate for the location of the box on the y axis 
  var speedY = 0; // speed for box along y axis 


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

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

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
    else if (event.which === KEY.DOWN) {
      console.log("down arrow pressed");
      speedY = -5; 
    }
    else if ( event.which === KEY.UP) {
      console.log("up arrow pressed");
      speedY = 5; 
    }
    else if (event.which === KEY.LEFT) {
      console.log("left arrow pressed");
      speedX = -5; 
    }
    else if (event.which === KEY.RIGHT) {
      console.log("right arrow pressed");
      speedX = 5; 
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameITem() {
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY; // update the position of the box along the y-axis
  }
  
  function redrawGameItem() {
    $("#box").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#box").css("top", positionY);    // draw the box in the new location, positionY pixels away from the "top"
  
  }
  
}


// Challenge: Do something with time
// NO STANDARD CLOCKS or sunsets ;)


var thisYear, thisMonth, thisDay, thisHour, thisMinute, thisSecond, colour;

function setup(){

  createCanvas(200,100);
}

function draw(){

  // Let's call our our function to update our variables
  getTime();

  colour = map(thisSecond, 0, 60, 0, 255);  //map() is awesome, look it up!
  background(colour, 255, 255);
  text("Today is: " + thisMonth + ' ' + thisDay + ' ' + thisYear, 5, 50);
}

// This is our nifty function to get a snapshot of time
function getTime(){

  thisYear = year();
  thisMonth = month();
  thisDay = day();
  thisHour = hour();
  thisMinute = minute();
  thisSecond = second();

  // Are there any other time functions in p5.js?
}
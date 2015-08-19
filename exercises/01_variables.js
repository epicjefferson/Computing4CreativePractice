// Variables

// These are variables, we can name them anything we want
// let's call them tailX and tailY
//  they're basically empty boxes, we'll put stuff in them later
var tailX;
var tailY;

function setup(){
  createCanvas(400,400);
  noCursor();
  stroke(245);

  // After setting the canvas size, we can use that info to
  // set the initial values of our variables
  tailX = width/2;
  tailY = height/2;
}

function draw(){
  background(245, 123, 158);

  line(mouseX, mouseY, tailX, tailY);
  
  // What can we do to set the values 
  // of the variables to our current cursor location?
}
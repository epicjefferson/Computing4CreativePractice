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
}

function draw(){
  background(245, 123, 158);

  line(mouseX,mouseY,tailX,tailY);
  
  tailX = mouseX;
  tailY = mouseY;
}
// Simple Gravity
// From learningprocessing by Dan Shiffman
var x = 100;
var y = 0;

var speed = 0;
var gravity = 0.1;

function setup(){
  createCanvas(200,200);
}

function draw(){
  background(255);
  fill(25, 75, 178);
  ellipse(x, y, 50, 50);
  y = y + speed;
  speed = speed + gravity;
  
  if(y > height){
    speed = speed * -0.95;
  }
}

// Exercise: Add left and right movement using keys
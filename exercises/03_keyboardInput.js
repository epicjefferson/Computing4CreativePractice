// Keyboard Input

// Exercise: Display full sentences instead of single key strokes
// 

var input;

function setup() {
  fill(245);
  textSize(50);
}

function draw() {
  background(245, 123, 158);
  text(key, 33,65); // Display last key pressed.
}

function keyPressed(){
  // you'll need this
}

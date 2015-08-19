// conditionals
// Use if statements to perform different tasks 
// depending on which quadrant the cursor is located in

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(245, 123, 158);

  // Divide the window in 4 parts upper left/right, and lower left/right.
  // Here is the center of the canvas.
  ellipse(width/2,height/2, 20, 20);
  
  ellipse(mouseX,mouseY,10,10);

}
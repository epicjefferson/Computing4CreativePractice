// Lab 7 - Part A
// turtlelab, translated from turtlelab.pyde (see bottom)
// from http://www.cs.cmu.edu/~15104/lab7/index.html

var turtle;
 
function setup(){
    createCanvas(400, 400);
    background(0);
    stroke(255);

    turtle = new Turtle(200, 200); 
    turtle.penDown();
    turtle.forward(40);
    turtle.right(135);
    turtle.forward(60);
    turtle.penUp();
}
function draw(){
    // Turtle(x, y) -- make a turtle at x, y, facing right, pen down
    // left(d) -- turn left by d degrees
    // right(d) -- turn right by d degrees
    // forward(p) -- move forward by p pixels
    // back(p) -- move back by p pixels
    // penDown() -- pen down
    // penUp() -- pen up
    // goto(x, y) -- go straight to this location
    // face(d) -- turn to this absolute direction in degrees
}
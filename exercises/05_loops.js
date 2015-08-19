// Let's do loops!!

function setup() {
  createCanvas(800,400);
  fill(25,75,178);
  background(35,221,199);
}

function draw() {
  
  // Here were creating ellipses individually
  ellipse(50,50,100,100);
  ellipse(150,50,100,100);
  ellipse(250,50,100,100);
  ellipse(350,50,100,100);
  
  
  // But that's no good, 
  // we can use for() loops!
  for (var i = 0; i < 8; i++){    // Notice the 8 loops
    
    // 8 loops = 8 ellipses
    rect(i*100, 200, 100, 100);    
  
    // We're just changing the X value for the rectangles,
    // try changing the Y value instead.
  }

  // Challenge:
  // Create a large grid of squares, 
  // each colored randomly.
  // you can only call rect() once!!
  // Hint: use 2 for() loops.
}
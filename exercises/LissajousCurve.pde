// Lissajous Curve
// Epic Jefferson Modified on Aug 15, 2015
// Ben Norskov April 2, 2013

float incrementer = 0;
float extraStuff = 0.0;

void setup() {
  size(350, 350);
  background(255, 0, 0);
  smooth();
}
void draw() {
  // background(25,75,178);
  //increment both values by different amounts
  float xOff = cos(incrementer * (1.3 + extraStuff)) * 150;
  float yOff = sin(incrementer * (5 + extraStuff)) * 100;
  //using the same value (no multiplier) means the ellipse moves in a circle
  
  ellipse(width/2 + xOff, height/2 + yOff, 10, 10);
  incrementer += .005;
  extraStuff += 0.0003;
}

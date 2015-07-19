function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
}

var theta = 0;

function draw(){
  background(255, 255, 255, 255);

  translate(0, 0, -100);
  
  push();
  rotateY(theta * 0.01);
  box(100, 100,100);
  pop();
  
  //X axis
  push();
  rotateX(theta * 0.01);
  box(2, 400, 2);
  pop();

  //Y axis
  push();
  rotateY(theta * 0.01);
  box(400, 2, 2);
  pop();

  //Z axis
  push();
  rotateZ(theta * 0.01);
  box(400, 2,2);
  pop();
  
  theta += 1;
}

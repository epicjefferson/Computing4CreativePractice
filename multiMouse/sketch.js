// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 123, 158);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://' + document.domain + ':' + location.port);
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      background(245, 123, 158);
      fill(0,0,255);
      noStroke();
      ellipse(data.x,data.y,10,10);
    }
  );
}

function draw() {
  // Nothing
}

function mouseMoved() {
  // Draw some white circles
  background(245, 123, 158);
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,10,10);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
// Keep track of our socket connection
var socket;
var myId = 0;

// $ trying an object
var id = {}
count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 123, 158);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://' + document.domain + ':' + location.port);
  socket.on('connect', 
    function() {
      socket.emit('my event', {data: 'I\'m connected!'});
    }
  );

  // when python receives the first message it responds
  socket.on('user id', 
    function(msg) {
      //server has assigned an ID
      myId = msg.data;               
    }
  );

  socket.on('add',
    function(msg){
      id[String(msg.data)] = [0,0];
      count += 1;
    }

  );

  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("!Got: " + data.id + " " + data.x + " " + data.y);
      // Draw a blue circle
      // background(245, 123, 158);
      // fill(0,0,255);
      // noStroke();
      // ellipse(data.x,data.y,10,10);
      // text(data.id, data.x+12, data.y-12);

      // add coordinates
      id[String(data.id)] = [data.x, data.y];
      console.log("Try this: " + data.id + ' ' + id[String(data.id)]);

      background(245, 123, 158);
      fill(0,0,255);
      noStroke();
      for (i in id){
        ellipse(id[i][0],id[i][1],10,10);
        text(i, id[i][0]+5, id[i][1]-5);

      }
      // if(count > 0){
      //   for (var i=1;i<=count;i++){
      //     ellipse(id[String(i)][0],id[String(i)][1],10,10);
      //     text(i, id[String(i)][0]+5, id[String(i)][1]-5);
      //     console.log("Got: " + i + " " + id[String(i)][0] + " " + id[String(i)][1]);

      //   }
      // }


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
    id: myId,
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
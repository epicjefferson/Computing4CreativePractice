//5-pointed star
// Original coordinates of the star are stored here:
var starX = new Array(125, 184, 30, 220,  66);
var starY = new Array(25, 206, 94,  94, 206);
// These coordinates are modified in a "drunken walk":
var starXr = new Array(125, 184, 30, 220,  66);
var starYr = new Array(25, 206, 94,  94, 206);

function setup(){
    createCanvas(250, 250);
    strokeWeight(3);
}
function draw(){
    background(255);
    // modify each coordinate to implement "drunken walk":
    for(var i = 0; i<5; i++){
        starXr[i] = starXr[i] + random(-1, 1);
        starYr[i] = starYr[i] + random(-1, 1);
    }
    // draw the 5-pointed star by connecting the points:
    for (var j = 0; j<5; j++){
        j2 = (j + 1) % 5;
        line(starXr[j], starYr[j], starXr[j2], starYr[j2]);
    }
}
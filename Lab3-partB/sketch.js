var locx = 0;
var locy = 100;
var velx = 0.7;
var vely = 0.0; # CHANGE THIS TO 1.0 AND -1.0 TO TEST VERTICAL WRAPPING

function setup(){
    createCanvas(400, 300);
}
function draw(){
    background(255);
    ellipse(locx, locy, 50, 50);
    // draw 2 more ellipses to left and right so that ellipses wrap in
    // from the left and right when the "main" ellipse goes off screen
    // to the right or left; draw 2 more ellipses above and below for
    // the same reason for vertical wrapping
    ellipse(locx + width, locy, 50, 50);
    ellipse(locx - width, locy, 50, 50);
    ellipse(locx, locy + height, 50, 50); 
    ellipse(locx, locy - height, 50, 50);
    locx = locx + velx;
    locy = locy + vely;
    if (locx > width) locx = 0;
    if (locx < 0) locx = width;
}
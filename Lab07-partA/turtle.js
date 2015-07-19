// Lab 7 - Part A
// queue.js "class", translated from turtle.py (see bottom)
// from http://www.cs.cmu.edu/~15104/lab7/index.html

function Turtle(x,y){
    this.x = x;
    this.y = y;
    this.angle = 0.0;
    this.penIsDown = true;
}

Turtle.prototype.left = function(d){
    this.angle -= d;
};

//example use -- turtle.left(d)

Turtle.prototype.right = function(d){
    this.angle += d;
};

Turtle.prototype.forward = function(p){
        var rad = radians(this.angle)
        var newx = this.x + cos(rad) * p
        var newy = this.y + sin(rad) * p
        this.goto(newx, newy)
}
Turtle.prototype.back = function(p){
    this.forward(-p);
};

Turtle.prototype.penDown = function(){
    this.penIsDown = true;
};

Turtle.prototype.penUp = function(){
    this.penIsDown = false;
};

Turtle.prototype.goto = function(x,y){
    if (this.penIsDown === true){
        line(this.x, this.y, x, y);
    }
    this.x = x;
    this.y = y;
};

Turtle.prototype.face = function(angle){
    this.angle = angle;
};

//-----------------------------------------------------
    // def __init__(this, x, y):
    //     this.x = x
    //     this.y = y
    //     this.angle = 0.0
    //     this.penIsDown = True

    // def left(this, d):
    //     this.angle -= d

    // def right(this, d):
    //     this.angle += d

    // def forward(this, p):
    //     rad = radians(this.angle)
    //     newx = this.x + cos(rad) * p
    //     newy = this.y + sin(rad) * p
    //     this.goto(newx, newy)

    // def back(this, p):
    //     this.forward(-p)

    // def penDown(this):
    //     this.penIsDown = True

    // def penUp(this):
    //     this.penIsDown = False

    // def goto(this, x, y):
    //     if this.penIsDown:
    //         line(this.x, this.y, x, y)
    //     this.x = x
    //     this.y = y

    // def face(this, angle):
    //     this.angle = angle
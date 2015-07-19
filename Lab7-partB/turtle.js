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
function setup(){
    createCanvas(400, 400);
}
function draw(){
    var n = 0;
    background(200, 100, 50);
    
    for(var x = 40; x < 400; x += 40){
        for(var y = 40; y < 400; y += 40){
            if(n % 2 === 0){ 
              c = color(100, 10, 100);
            } else{
              c = color(100, 100, 100);
            }
            fill(c);
            ellipse(x, y, 20, 20);
            n++;
        }
    }
}
//var easing = 0.07;
//var x = 0;
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.03;

function setup(){
 
    createCanvas(windowWidth,windowHeight);
    
    
    
}

function draw(){
    let x1 = map(mouseX,0,width,0,255,true);
    let x2 = map(mouseY,0,width,0,255,true);
    let x3 = map(mouseY,0,width,0,255,true);
    fill(x1,x2,x3);
    
    var targetX=mouseX;
    x +=(targetX-x)*easing;
    var targetY=mouseY;
    y+=(targetY-y)*easing;
  
    ellipse(x,y,25,25);
    py=y;
    px=x;

    let s1 = map(mouseX,0,width,0,155,true);
    let s2 = map(mouseY,0,width,0,155,true);
    let s3 = map(mouseY,0,width,0,255,true);
    fill(s1,s2,s3);
    ellipse(x-25,y-5,30,30);


    let e1 = map(mouseX,0,width,0,255,true);
    let e2 = map(mouseY,0,width,0,255,true);
    let e3 = map(mouseY,0,width,0,155,true);
    fill(e1,e2,e3);
    ellipse(x-10,y-50,25,25);
    ellipse(x+30,y+50,25,25);
    

    

}


function windowResized(){
    resizeCanvas(windowHeight,windowWidth);
 }
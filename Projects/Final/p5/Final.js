
var mapimage;


let x,y; // LAX > SCO
let x1,y1; // LAX > LGA
let x2,y2; // LAX > NOLA
let x3,y3; // LAX > DEN
let x4,y4; // LAX > MCO
let x5,y5; // LAX > DSM

let x6,y6; // MSY > LAX
let x7,y7; // MSY > SAT
let x8,y8; // MSY > RIC
let x9,y9; // MSY > DES
let x10,y10; //MSY > SLC

let x11,y11; //MDW > LAS
let x12,y12; //MDW > PDX
let x13,y13; //MDW > DAL


function preload(){
    mapimage = loadImage('US_MAP.png');

}

function setup(){
    createCanvas(1024,600);
    translate(width/2, height/2);
    imageMode(CENTER);


///////////////////////LAX////////////////////////
    x = 92;
    y = 358;

    x1 = 92;
    y1 = 358;

    x2 = 92;
    y2 = 358;

    x3 = 92;
    y3 = 358;

    x4 = 92;
    y4 = 358;

    x5 = 92;
    y5 = 358;
///////////////////////MSY////////////////////////
    x6 = 653;
    y6 = 490;

    x7 = 653;
    y7 = 490;

    x8 = 653;
    y7 = 490;

    x9 = 653;
    y9 = 490;

    x10 = 653;
    y10 = 490;
///////////////////////MDW////////////////////////
    x11 = 670;
    y11 = 230;

    x12 = 670;
    y12 = 230;
}

    
function draw(){
    background('gray');
    tint(255,100);
    image(mapimage,512,300,1024,600);
    
    
    
   ////////// LAX > SCO //////////////
   fill(255, 213, 140);
   let LAX = ellipse(92,358,10,10);
   fill(225);
   let SCO = ellipse(37,259,10,10);
   stroke(225);  
   ellipse(LAX);
   ellipse(SCO);
   x = x - .5
    y = y - 1;
    if (y < 259) {
        y = 358;
        x = 92;
    }
    fill(255, 213, 140);
    ellipse(x,y,24,24); 
    //////////////////////////////////

    
    
   LAXtoLGA(); 
   LAXtoMSY();
   LAXtoDEN();
   LAXtoMCO();
   LAXtoDSM();

   MSYtoLAX();
   MSYtoSAT();
   MSYtoRIC();
   MSYtoDES();
   MSYtoSLC();

   MDWtoLAS();
   MDWtoPDX();
   MDWtoDAL();

}
function LAXtoLGA(){
    fill(225);
    let LGA = ellipse(926,211,10,10);
    ellipse(LGA);
    x1 = x1 + 5.7
    y1 = y1 - 1;
    if (y1 < 211) {
        y1 = 358;
        x1 = 92;
    }
    fill(255, 213, 140);
    ellipse(x1,y1,24,24);
}

function LAXtoMSY(){
    fill(147, 49, 245);
    let MSY = ellipse(653,490,10,10);
    easing = .5
    ellipse(MSY);
    x2 = x2 + 9.5 * easing;
    y2 = y2 + 1;
    if (x2 > 653) {
        x2 = 92;
        y2 = 358;
    }
    fill(255, 213, 140);
    ellipse(x2,y2,24,24);
}

function LAXtoDEN(){
    fill(225);
    ellipse(370,270,10,10);
    x3 = x3 + 3.1;
    y3 = y3 -1;
    if (y3<270){
        y3 = 358;
        x3 = 92;
    }
    fill(255, 213, 140);
    ellipse(x3,y3,24,24);
}

function LAXtoMCO(){
    fill(225);
    ellipse(835,500,10,10);
    easing=.5
    x4 = x4 +9.6 *easing
    y4 = y4 +.9;
    if (x4>835){
        x4=92;
        y4=358;
    }
    fill(255, 213, 140);
    ellipse(x4,y4,24,24);
}

function LAXtoDSM(){
    fill(225);
    ellipse(560,238,10,10);
    x5 = x5+4;
    y5 = y5-1;
    if(y5<238){
        y5=358;
        x5=92;
    }
    fill(255, 213, 140);
    ellipse(x5,y5,24,24);
}

function  MSYtoLAX(){
    x6 = x6 - 9.3 * easing;
    y6 = y6 - 1;
    if (x6 < 92) {
        x6 = 653;
        y6 = 490;
    }
    fill(147, 49, 245);
    ellipse(x6,y6,24,24);
}

function MSYtoSAT(){
    fill(255);
    ellipse(500,500,10,10);
    
    x7 = x7 -10 *easing
    y7 = y7 -.01;
    if (x7<500){
        x7 = 653
        y7=490
    }
    fill(147, 49, 245);
    ellipse(x7,y7,24,24);
}

function MSYtoRIC(){
    fill(225);
    easing = 10;
    ellipse(880,297,10,10);
    x8 = x8 +.5*easing;
    y8 = y8 -4.5;

    if (x8>880){
        y8=490;
        x8=653;
    }
    fill(147, 49, 245);
    ellipse(x8,y8,24,24);
}

function MSYtoDES(){
    x9=x9 -1;
    y9=y9 -3;
    if (x9<570){
        y9=490;
        x9=653;
    }
    ellipse(x9,y9,24,24);
}

function MSYtoSLC(){
    fill(255);
    ellipse(244,240,10,10);
    x10=x10-3;
    y10=y10-1.8;
    if (x10<244){
        x10=653;
        y10=490;
    }
    fill(147, 49, 245);
    ellipse(x10,y10,24,24);
}

function MDWtoLAS(){
    fill(143, 217, 174);
    ellipse(670,230,10,10);
    fill(255);
    ellipse(157,326,10,10);
    x11=x11-5.7;
    y11=y11+1;
    if (x11<157){
        x11=670;
        y11=230;
    }
    fill(143, 217, 174);
    ellipse(x11,y11,24,24);
}

function MDWtoPDX(){
    fill(255);
    ellipse(80,103,10,10);
    x12 = x12 -4.8;
    y12 = y12 -1;
    if (x12<80){
        x12 = 670;
        y12 = 230;
    }
    fill(143, 217, 174);
    ellipse(x12,y12,24,24);
}

function MDWtoDAL(){
    fill(225);
    ellipse(515,430,10,10);
    //x13 = x13+1;
    //y13 = y13 -1;
   
}
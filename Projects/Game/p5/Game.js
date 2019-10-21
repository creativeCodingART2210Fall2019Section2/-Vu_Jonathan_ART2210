var radius = 40;
var xr = 110;
var speed = 3;
var move = 5;
var catX = 300;

var catWidth = 90;
var catY = 430;
var rectX, rectY,rectWidth,rectHeight; 
var catHeight = 100;
let easing = .7;

var snow = [];
var time = 0;

let xspacing = 1;
let w;
let theta = 0.0;
let amplitude = 15;
let period = 500;
let dx;
let yvalues;


var fishNum = 10;
var fishAcc = [];
var fishVel = [];
var fishPosX = [];
var fishPosY = [];
var timePeriod = 0;

var fishRadius1=25;
var fishRadius2=10;

let bgCol=100;
var score = 0;

let ball={
    x:100,
    y:30,
    speed:0
}
var gravity = 0.1;
var diameter = 24;
var diameter2 = 15;
var xballChange=4;
var yballChange=4;

function setup(){
    createCanvas(700,550);
    w=width +16;
    dx = (TWO_PI / period)* xspacing;
    yvalues = new Array(floor(w/xspacing));

    
    var temp00 = 0, temp01 = -20;
    while(temp01 < height){
        temp00 +=0.02;
        temp01 += temp00;
        timePeriod++;
    }
    FishPosition();
    
    rectX = 250;
    rectY = 340;
    rectWidth = 100;
    rectHeight = 20;
}



function draw(){
    keyPressed();
    background(bgCol);
    
    
    fill(255);
    stroke(255);
    let catbody = ellipse(catX,catY,catWidth,catHeight)
    ellipse(catbody);
    
    drawCatEyes();
    drawCatMouth();
    CatBoat();
    drawCatEars();
    drawSnow();
    drawOcean();
    //scoreUpdate();
    basket();

    calcWave();
    renderWave();
    //fishFloat();
    
    
    //updateFishPosition();
    
    
    /*if (isMouseInside(rectX,rectY,rectWidth,rectHeight)){
        bgCol=30;
    } else {
        bgCol=100;
    }*/
    
    displayBall();
    moveBall();
    ballBounce();

    ball.x+= xballChange;
    ball.y+=yballChange;
    if (ball.x >width){
        xballChange=-3;
    }
    if (ball.x<0){
        xballChange=1;
    }
    if (ball.y<0){
        yballChange=-1;
    }
    if (ball.y>550){
        splice(ball);

    }
    
    if (catX < 0){ // left of window
        catX=catX+move 
        rectX=rectX+move
    }
    if (catX > width){ // right of window
        catX=catX-move
        rectX=rectX-move 
    }

    time++;
    
}

function displayBall(){
    fill(255);
    ellipse(ball.x,ball.y,diameter,diameter2);
}
function moveBall(){
    ball.y=ball.y+ball.speed;
    ball.speed = ball.speed + gravity;
}
function ballBounce(){
    if (ball.x>rectX && ball.x<rectX+rectWidth && (ball.y + (diameter/2) >= rectY)){
        ball.speed=ball.speed*-0.05;
        xballChange *= -1;
        yballChange += -1;
    }
}  

function keyPressed(){
    if (keyCode === RIGHT_ARROW && keyIsPressed){
        catX = catX+move * easing;;
        rectX = rectX+move *easing;;
    }
    else if (keyCode === LEFT_ARROW && keyIsPressed){
        catX = catX-move * easing;;
        rectX = rectX-move * easing;
    }
}

function fishFloat(){
    for (var i =0; i < fishNum; i++){
        let fish = ellipse(fishPosX[i],fishPosY[i],fishRadius1,fishRadius2);
        ellipse(fish);
}
}

function drawCatEyes(){
    fill(0);
    fill('orange');
    ellipse(catX+20,catY-15,19,18);
    fill(0);
    ellipse(catX-20,catY-15,10,10); // left eye
    ellipse(catX+20,catY-15,10,10); // right eye
    
}

function drawCatMouth(){
    stroke(0);
    noFill();
    beginShape();
    bezier(catX-10,catY-12,catX,catY-3,catX,catY-15,catX,catY-12);//x1,y1,x2,y2,x3,y3,x4,y4
    bezier(catX+10,catY-12,catX,catY-3,catX,catY-15,catX,catY-12);
    endShape();

}

function CatBoat(){
    fill(255);
    arc(catX,catY+25+sin(frameCount),180,80,0,3.2);
    line(catX-50,catY+21,catX-50+sin(frameCount),catY-90);
    line(catX+50,catY+24,catX+50+sin(frameCount),catY-90);
    
}
function basket(){
    fill(255);
    rect(rectX,rectY,rectWidth,rectHeight);
    rect(catX-45,catY-70,90,10);
}
function drawCatEars(){
    noStroke();
    triangle(catX-35,catY-15, catX-38,catY-58+sin(frameCount), catX,catY-40);
    fill('orange');
    triangle(catX+35,catY-30,catX+30,catY-60-sin(frameCount),catX+15,catY-45);
}

function drawOcean(){
    stroke(225);
    noFill();
    curve(100,300, 0,510, 700,510, 1800,900);
    curve(100,300, 0,515, 700,520, 1800,900);
    curve(100,300, 0,520, 700,530, 1800,900);
    curve(100,300, 0,530, 700,540, 1800,900);
    curve(100,300, 0,540, 700,550, 1800,900);
}

function calcWave(){
    theta +=0.06;
    let u = theta;
    for (let i = 0; i < yvalues.length; i++){
        yvalues[i]= sin(u)*amplitude;
        u += dx;
    }
}

function renderWave(){
    noStroke();
    fill(255);
    for (let x =0; x<yvalues.length;x++){
        ellipse(x*xspacing, 490+yvalues[x],16,16);
    }
}

function drawSnow(){
    noStroke();
    fill(225);
    let t = frameCount / 1000000;
    for (let i = 0; i < 0.025; i++){
        snow.push(new snows());
    }
    for (let ball of snow){
        ball.update(t*2);
        ball.display();
    }
}

function snows(){
    this.posX=0;
    this.posY= random(50,0);
    this.initialangle = random(0,2*PI);
    this.size = random(2,5);
    this.radius = sqrt(random(pow(width/2,2)));

    this.update =function(time){
        let w = 10;
        let angle = w * time + this.initialangle;
        this.posY += pow(this.size, .25);
        this. posX = width / 2 + this.radius * sin(angle);
        
    }
    if (this.posX > width){
        let index = snow.indexOf(this);
        snow.splice(index,1);
    }
    this.display= function(){
        ellipse(this.posX,this.posY,this.size);
    }
}

function drawFish(){
    fill(255);
    let fish = curve(300,-600, 370,200, 350,250, -990,100);
    
    curve(fish);
    line(370,200,350,250);
    fill(0);
    ellipse(450,275,5,5);
}

function FishPosition(){
    for (var i =0; i<fishNum; i++){
        fishAcc[i] = random(.06,.09);
        fishVel[i] = random(0,13);
        fishPosX[i] = random(0,700);
        fishPosY[i] = -10;
    }
}

function updateFishPosition(){
    for (var i = 5; i<fishNum; i++){
        fishVel[i]+=fishAcc[i];
        fishPosY[i]+=fishVel[i];
    }
    if (time > timePeriod){
        FishPosition();
        time=0;
    }
}

function catchFish(){
    var temp = 0.5*(catbody+fishRadius)-2;
    var distance;

    for (var i=0;i<fishNum;i++){
        distance=dist(catX-50,catY-90,fishPosX[i],fishPosY[i]);
        if(distance < temp){
            return true;
        } 
        }
        return false;
    } 
    
function gameover(){
    fill(255);
    noLoop();
}

function scoreUpdate(){
    score+=5;
    let s = text('SCORE');
    textSize(20);
    fill(255);
    text('SCORE: ' , width/2-110, 35);
}

function isMouseInside(x,y,w,h){
    if (fishRadius1> x && fishRadius1 < x+w && fishRadius2 > y && fishRadius2 < y +h){
        return true;
    }
else{
        return false;
    }
}




function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
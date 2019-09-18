function setup(){
 
   createCanvas(1000,1000);
   // createCanvas(windowWidth,windowHeight);
    

}

  
function draw(){
    //background(232,197,166);
    background(255);
    

    translate(0,310);

   
    noFill();
    curve(700,100, 350,250, 400,370, -45,400);//cheek&eye
    strokeWeight(1.95);
    curve(600,-455, 370,200, 350,250, -990,100);//eyecurve
    curve(-150,1500, 280,320, 400,370, 900,70);//cheek
    curve(900,980, 380,435, 280,320, 400,400); //jaw
    curve(100,100,  380,435, 600,500, 500,100); //jawline
    curve(500,800, 600,500, 650,250, 200,100); //cheekline
    curve(800,200, 590,250, 650,250, 900,76); //righteyebot
    curve(100,300, 590,250, 670,220, 800,76); //righteyetop
    curve(1500,340, 670,220, 530,330, 200,80); // nose
    curve(130,100, 550,340, 555,317, 600,800); //nose right
    curve(100,900, 590,76, 340,70, 600,-390); //hair mid
    curve(-970,290, 340,69, 367,37, -780,940); //hair loop mid
    curve(-80,1150, 590,76, 620,119, 90,-290); //hair front
    curve(-100,900, 670,220, 290,250, 400,2000); //forehead
    curve(100,100, 290,250, 280,30, 100,100); //hair triangle
    curve(320,800, 264,280, 278,349, 900,300); //ear
    curve(70,100, 285,350, 303,620, -300,100); //neck
    curve(700,900, 303,620, 190,740, 1400,800);//shoulder
    strokeWeight(1);
    
    curve(500,530, 530,330, 520,330, 550,380); //nostril
    curve(650,390, 520,330, 530,290, 790,190);//nose left
    line(550,410,550,340); //dent in lip
    curve(720,359, 550,410, 620,420, 1400,470); //midlip
    curve(380,860, 550,410, 615,420, 900,100); //lip
    curve(-990,800, 367,37, 619,75, -1100,270); //hair top front
    curve(1200,-100, 619,75, 671,170, -960,380); //hair front thin
    curve(100,100, 280,30, 550,55, 100,100); //hair back
    curve(1100,-360, 550,55, 232,135, -990,1680); //hair back mid thin
    curve(120,100, 232,135, 264,280, 100,100); //hair back
    
    curve(880,1200, 285,350, 276,299, 270,-430); //earhole
    curve(1230,-400, 276,299, 260,200, 330,710); //ear&head back
    curve(600,-600, 520,515, 400,700, -1760,300); //neckright
    curve(700,100, 510,513, 500,670, 100,100);//neckrightvalue
    curve(100,-100, 500,670, 400,650, 100,100);
    curve(90,700, 350,640, 200,670, -100,1000);
    
    
    curve(100,-400, 340,480, 350,640, 300,620); //neckvalue
    curve(700,990, 340,480, 470,550, -100,460);//neckvaluetop
    curve(-110,-800, 470,550, 400,650, 820,2300); //neckvaluebot

    




    noFill();
    strokeWeight(1);
    curve(400,400, 370,200, 470,245, 100,300) //eyebrow left
    curve(470,85, 372,199, 470,245, 300,300);
    //     x1,y1, x2,y2,   x3,y3  ,x4,y4
    //    topcurve  top     bot    botcurve

    noFill();
    ellipse(417,266,20,17); //eyeball left
    ellipse(611,255,20,15);//eyeball right

    shearX(PI / 4.07);
    ellipse(-400,691,190,50);//shoulderinner
    ellipse(59,355,50,37); //cheekcont
    shearY(HALF_PI / 8.07);
    ellipse(80,474,20,20);//chin   
    }


 function windowResized(){
    resizeCanvas(windowHeight,windowWidth);
 }
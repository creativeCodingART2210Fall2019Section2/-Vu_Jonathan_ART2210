var texty = "WHERE DO WE GO FROM HERE?";

function setup(){
 
   //createCanvas(2000,1000);
   createCanvas(windowWidth,windowHeight);
   frameRate(10);

}

  
function draw(){
    background(228, 196, 187);
    //background(255);
    //angleMode(DEGREES);
    

    translate(0,10);
    //translate(windowWidth/2,windowHeight/2);
    let x1 = map(mouseX,0,width,0,255,true);
    let x2 = map(mouseY,0,width,0,255,true);
    let x3 = map(mouseY,0,width,0,255,true);
    stroke(color(x1,x2,x3));

    
    //strokeWeight(3);
   // line(1073,630,1073,520);// divider  
    //line(1000,520,1152,520); //t top
    


    noFill();
    strokeWeight(1);
    curve(700,100, 350,250, 400,370, -45,400);//cheek&eye
    strokeWeight(1.95);
    curve(600,-455, 370,200, 350,250, -990,100);//eyecurve
    curve(-150,1500, 280,320, 400,370, 900,70);//cheek
    curve(900,980, 380,435, 280,320, 400,400); //jaw
    curve(100,100,  380,435, 600,500, 500,100); //jawline
    curve(500,800, 600,500, 650,250, 200,100); //cheekline  ***
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
    curve(700,900, 303,620, 190,840, 1100,1800);//shoulder
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
    curve(600,-600, 520,515, 450,800, -1760,300); //neckright
    curve(700,100, 510,513, 500,670, 100,100);//neckrightvalue
    curve(100,-100, 500,670, 400,650, 100,100);//bottomneckvalue
    curve(-90,180, 380,640, 200,670, -100,1000);//shouldervalue
    
    
    curve(100,-400, 340,480, 380,640, 800,620); //neckleftvalue
    curve(700,990, 340,480, 470,550, -100,460);//neckvaluetop
    curve(-110,-800, 470,550, 400,650, 820,2300); //neckvaluebot


    stroke(color(225));
    strokeWeight(3);
    curve(3110,-1100, 1070,700, 900,1320, 2100,1100);//boxbotmid
    curve(1100,300, 979,690, 969,580, 2100,100);//boxlefbot
    curve(500,1700, 1030,490, 1060,400, 2100,900);//boxlefttop

    fill(225,225,225,190);
    curve(-1400,-500, 1060,400, 900,200, 1100,910);//innerpetalright
    curve(600,-1100, 900,200, 1040,370, 1100,-100);//654,380 innerpetalleft
    curve(710,600, 1040,370, 870,260, 2100,-1100);//petalleftbot
    curve(1200,-400, 870,260, 1040,320, 3100,2100);//petaltopleft
    curve(1300,900, 1040,320, 1150,290, 10,1100);//petaltopmid
    curve(2000,-300, 1150,290, 1038,470, 800,300);//petalbotright
    


    textSize(35);
    //text(texty, 0,0);
    translate(-30,260);
    textAlign(CENTER,CENTER);
    var middle = texty.length / 1;
    var left = middle - ((mouseX/ width) * middle);
    var right = middle + ((mouseX / width) * middle);
    text(texty.substring(left, right+1),width/2, height/2);


    /*curve(400,-890, 830,250, 740,250, 1000,1450);//w
    curve(200,-900, 830,250, 930,270, 1000,1490);//wh
    line(930,270,936,310);//h
    curve(900,900, 936,310, 955,310, 880,100);//h
    curve(700,100, 955,310, 970,300, 700,900);//e
    curve(1500,-700, 970,300, 1030,290, 500,1100);//er
    line(1030,290,1065,285);//r
    curve(1500,-500, 1065,285, 1090,310, 100,699);//re
    curve(1700,-600, 1090,310, 1140,320,-700,10);//e

    curve(1000,-11, 794,410, 788,360, 1200,300);//d
    curve(1000,-10, 800,300, 820,430, 900,100);//d
    curve(100,100, 820,430, 830,429, 1000,1100);//o

    curve(1300,-690, 935,370, 970,410, 1000,900);//w
    curve(1000,-390, 970,410, 990,435, 1000,900);//w
    curve(700,100, 990,435, 1010,410, 500,1110);//e
    curve(1350,-100, 1010,410, 1040,430, -100,100);//e
    

    
    textAlign(CENTER);
    let h = 'WHERE DO WE GO FROM HERE?';
    let e = 'WHERE DO WE GO FROM HERE?';
    
    textSize(75);
    textStyle(NORMAL);
    //fill(random(190),random(225),random(190));
    //textFont('COURIER');
    text(h,800,70,500,800);
    //fill(random(255),random(200),random(200));
    
    textFont('GEORGIA');
    textStyle(ITALIC);
    text(e, 800,73,500,800);

   */
    translate(30,-260);
    noFill();
    stroke(color(225));
    strokeWeight(2);
    square(980,500,190);
    square(970,490,190);
    square(990,510,190);
    fill(255);
    textSize(100);
    text('J',1035,600);
    text('V',1105,600);
    
    noFill();
    stroke(color(x1,x2,x3));
    strokeWeight(1);
    curve(400,400, 370,200, 470,245, 100,300) //eyebrow left
    curve(470,85, 372,199, 470,245, 300,300);
    //     x1,y1, x2,y2,   x3,y3  ,x4,y4
    //    topcurve  top     bot    botcurve

    noFill();
    ellipse(417,266,20,17); //eyeball left
    ellipse(611,255,20,15);//eyeball right

    
    /*line(790,400,820,400);//base j
    line(790,400,790,390);//diagonal
    line()
    */
    

    strokeWeight(1);
    shearX(PI / 4.07);
    ellipse(-400,691,190,50);//shoulderinner
    ellipse(59,355,50,37); //cheekcont
    shearY(HALF_PI / 8.07);
    ellipse(80,474,20,20);//chin   
    

    
    


    }


 function windowResized(){
    resizeCanvas(windowHeight,windowWidth);
   }
    
     var a = 0
     var img;

     function preload(){
     //img = loadImage('https://jvu11.github.io/Vu_Jonathan_ART2210/Projects/Clock/p5/image/coconut.JPG');
     img = loadImage('https://github.com/jvu11/Vu_Jonathan_ART2210/raw/master/Projects/Clock/p5/image/coconut.JPG');
     //https://github.com/jvu11/Vu_Jonathan_ART2210/raw/master/Image/Her_BTS.jpg
     
     }


     function setup(){
     createCanvas(windowWidth,windowHeight);
     //loadImage('image/coconut.jpg');
     //img(0,height/2,width/2);
     ellipseMode(CENTER);
     rectMode(CENTER);
    
     
     
     }
    
    
    
     function draw(){
     image(img,windowWidth/2,windowHeight/2); 
     
     background('#BA8D77');
     fill('#0C1A30');
     ellipse(280,510,260,260);
     
    
     let hr = hour();
     let mn = minute();
     let sc = second();

     strokeWeight(2);
     
     let secondAngle = map(sc, 0, 60, 0, 360);
     let minuteAngle = map(mn, 60,0 , 0, 360);
     let hourAngle = map(hr, 0,24, 0, 360);

     ///////////////////////////////////////////// minute

    
     


     translate(300,200);
     fill('#0C1A30');
     arc(0,0,300,300,0,0);
     noFill();
     stroke(255);
     arc(0,0,200,200,0,minuteAngle);
     arc(0,0,150,150,0,minuteAngle);
     
    //////////////////////////////////////////// second
    
     fill('#0C1A30');
     translate(350,200);
     arc(0, 0, 400, 400, 0, 0);
     noFill();
     stroke(255);
     arc(0,0,200,200,0,secondAngle); 
     arc(0, 0, 300, 300, 0,secondAngle);

     

     
    
     
     

    
  //////////////////////////   second

     push();
     fill(255,0,0);
     stroke('#0C1A30');
     rotate(a)
     a = a -0.1
     ellipse(0,0,110,111,a);
     ellipse(0,0,100,99,0);
     stroke(255);
     noFill();

     arc(0,0,250,255,0,0);
     arc(0, 0, 390, 385, 0, 0);
     arc(0, 0, 375, 370, 0, 0);
     arc(0, 0, 360, 365, 0, 0);
     arc(0, 0, 350, 355, 0, 0);
     pop();
     
  //////////////////////////    minute

     push();
     translate(-350,-200);
     stroke(255);
     
     rotate(a)
     ellipse(0,0,177,177);
     ellipse(0,0,110,107);
     arc(0,0,250,255,0,0);
     arc(0,0,288,285,0,0);
     arc(0,0,280,277,0,0);
     
     strokeWeight(2);
     fill('#F5F07F');
     ellipse(0,0,50,49);
     stroke('#0C1A30');
     ellipse(0,0,44,40);
     pop();  


     /////////////////////////////////////////// hour
     
     push();
     translate (-370,110);
     arc(0,0,100,100,0,hourAngle);
     arc(0,0,150,150,0,hourAngle);
     
     //fill('#0C1A30');
     ellipse(0,0,260,260);
     
     
     
     
     rotate(a)
     a = a - 0.0009

     stroke(225);
     ellipse(0,0,255,250);
     noFill();
     
     
     
     ellipse(0,0,200,203);
     fill(225);
     ellipse(0,0,65,63);
     stroke('#0C1A30');
     ellipse(0,0,59,61);
     pop();
    // arc(0,0,100,100,0,hourAngle);
     //arc(0,0,150,150,0,hourAngle);
     
     /////////////////////////////////////////////////

     let t = 'time'
     let o = 'only'
     let w = 'will tell'

     textSize(70);
     
     text(t, 430,-100,70,80);

     if (keyIsPressed){
          
          text(o,427,-190,70,80);
          text(w,500,40,200,200);
          translate(-170,280);
          text(hr +':' + mn + ':' +sc,10,20);
     }

     
     

     
    
     }
     
    
    
     function windowResized(){
     resizeCanvas(windowWidth,windowHeight);
    
     }
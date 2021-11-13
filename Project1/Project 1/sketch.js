//my word was bubbly
let fishX = 0;
let fishY = 0;
let bubblesize =0;
let cY;
let cX;
let cOpacity = 255;
let opacity;
let bX;
let bY;
let numFish = [0, 30, 60];

function setup(){
createCanvas(800,800);
frameRate(6);
 paco=  new Cacoon(0,0);
 paco2= new butterfly(0,0); 
    fish1= new fish(370,160);
    fish2= new fish(330,130);
    fish3= new fish(300,160);
    fish4= new fish(570,460);
    fish5= new fish(530,430);
    fish6= new fish(500,460);
    
}

function draw() {
oceanWorld(); 
paco.display();
fish1.display();
fish2.display();
fish3.display();
fish4.display();
fish5.display();
fish6.display();
    fish1.bubbles();
fish2.bubbles();
fish3.bubbles();
fish4.bubbles();
fish5.bubbles();
fish6.bubbles();
    if (millis()> 7000 && millis()<15000){//cacoon disappears and butterfly apears and flys away
       paco.disappear();
        paco2.display();
        paco2.fly();
        
    }
    else{
        paco.shake();
        
    }
    if(millis()>15000){
       paco2.social();
        //butterfly seeks cacoon
}
    
}

function oceanWorld() {//the background for my ocean   
    background (77,131,242);
noStroke();
fill (173,117,73,180);
rect(0,600, width, 250,20);
    fishHook();
 
//for (fishX=0; fishX<width; fishX= fishX + 100){
 // for(fishY=0; fishY<height; fishY = fishY +100 ){
//fishiEs();
//}
//}
//if (fishX++){
//  bubblesize++;
//}
//if (bubblesize== 5){
 // bubblesize= 1;
//}
//  fishHook();
}

function fishiEs(){//fish move around and make bubbles
fill (255,205,69);
triangle(fishX+0, fishY+0, fishX+0, fishY-30, fishX+30,fishY-15);
ellipse(fishX+40, fishY-15,40,30);
fill(255,180);
push();
translate(fishX +70, fishY+ 25);
scale(bubblesize);
circle(fishX, fishY, 5);//the bubbles their making
circle(fishX, fishY, 3);
circle(fishX, fishY, 1);
pop();
}

function fishHook(){
   fill(0);
  rect(157,0,5,257);
   rect(157,257,50,5);
}

class fish{
    constructor(x,y){
         this.fishX= x; 
        this.fishY=y;
        this.bubblesize=1;
         this.yspeed= 0
    }
    display(){
       fill (255,205,69);
       // for(let i = 0;i < 4; i= i +15){
triangle(this.fishX, this.fishY, this.fishX, this.fishY-30, this.fishX+30,this.fishY-15);
ellipse(this.fishX+40, this.fishY-15,40,30);
print(this.fishX);
    //}
        }
    bubbles(){
fill(255,180);
        //this.pos.add(this.vel);
circle(this.fishX+60, this.fishY-25+this.yspeed, this.bubblesize+5);//the bubbles their making
circle(this.fishX+55, this.fishY-45+this.yspeed, this.bubblesize+3);
circle(this.fishX+53, this.fishY-75+this.yspeed, this.bubblesize);
       
        this.yspeed=this.yspeed-1;
        if (this.yspeed==-20){
            this.yspeed=0;
        }
        if (this.yspeed< 0){
           this.bubblesize++;
       }
        else{
            this.bubblesize=0;
            }
        //this.vel.limit(6);
//push();
//translate(this.fishX, this.fishY);
//scale(this.bubblesize);
        //for(this.bubblesize =1; this.bubblesize<= 5; this.bubblesize++){
        //    for(let i=0;i <=5; i++){
//circle(this.fishX+60+i, this.fishY-25+i, this.bubblesize+5);//the bubbles their making
//circle(this.fishX+55+i, this.fishY-30+i, this.bubblesize+3);
//circle(this.fishX+53+i, this.fishY-35+i, this.bubblesize+1);
//pop(); 
    //    }
        //}
      //  if (bubblesize==5){
      //  bubblesize=1;    
       // }
    
    }
}
class Cacoon{//my cacoon
    
  constructor (x,y){
      this.cX = x;
      this.cY = y;
      this.cOpacity =255;
  }
    display(){
        fill(200,100,12,this.cOpacity);
        ellipse(this.cX+177, this.cY+287, 40, 100);//the actual cacoon
    }
    
    shake(){
        frameRate();//so that it moves faster again
        this.cX = this.cX + random(-2,2);
        this.cY = this.cY + random(-2,2);
    }
disappear(){//not actually disapeearing just getting transparent
   this.cOpacity= this.cOpacity -30;
}
}


class butterfly{
    constructor (x,y){
     // this.x = x;
      //this.y = y;
        this.pos = createVector(x,y);
        this.vel = createVector(4,7);
        this.wingFly=60;
        
    }
    display(){
        strokeWeight(1);
        stroke(0);
        fill(57);
        rect(this.pos.x+163,this.pos.y+217,5,55);//antennas
        rect(this.pos.x+187,this.pos.y+217,5,55);
        fill(204,121,12);
        ellipse(this.pos.x+177,this.pos.y+287,60,80);
        ellipse(this.pos.x+137,this.pos.y+267,this.wingFly,80);
         ellipse(this.pos.x+217,this.pos.y+267,this.wingFly,80);
         ellipse(this.pos.x+137,this.pos.y+297,50,60);
        ellipse(this.pos.x+217,this.pos.y+297,50,60);
    }
 fly(){
     this.wingFly= this.wingFly + random(-3,4);//so it looks like the wings are fluttering
     if (this.wingFly>60){ 
        this.pos.sub(this.vel);//i just want a variation in the direction of the butterfly
    }
   else{
 this.pos.add(this.vel);
     }
     
 }
    
    social(){
        let desired = p5.Vector.sub(360,this.pos);
        let steering = p5.Vector.sub(desired,this.vel);
        //make butterfly social by going to fish im not sure if im using p5. vector correctling but i was trying to use the steering concept
    }
}
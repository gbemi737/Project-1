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

function setup(){
createCanvas(800,800);
frameRate(6);
 paco=  new Cacoon(0,0);
 paco2= new butterfly(0,0);  
}

function draw() {
oceanWorld(); 
  paco.display();
    if (millis()> 7000){//cacoon disappears and butterfly apears and flys away
       paco.disappear();
        paco2.display();
        paco2.fly();
        
    }
    else{
        paco.shake();
    }
    
}

function oceanWorld() {//the background for my ocean   
    background (77,131,242);
noStroke();
fill (173,117,73,180);
rect(0,600, width, 250,20);
 
for (fishX=0; fishX<width; fishX= fishX + 100){
  for(fishY=0; fishY<height; fishY = fishY +100 ){
fishiEs();
}
}
if (fishX++){
  bubblesize++;
}
if (bubblesize== 5){
  bubblesize= 1;
}
  fishHook();
}

function fishiEs(){//fish move around and make bubbles
fill (255,205,69);
triangle(fishX+0, fishY+0, fishX+0, fishY-30, fishX+30,fishY-15);
ellipse(fishX+40, fishY-15,40,30);
fill(255,180);
push();
translate(fishX +70, fishY+ 25);
scale(bubblesize);
circle(fishX+5, fishY+5, 1);//the bubbles their making
circle(fishX+10, fishY+10, 3);
circle(fishX+15, fishY+15, 5);
pop();
}

function fishHook(){
   fill(0);
  rect(157,0,5,257);
   rect(157,257,50,5);
}
class Cacoon{//my cacoon
    
  constructor (x,y){
      this.cX = x;
      this.cY = y;
      this.cOpacity =255;
  }
    display(){
        fill(34,97,34,this.cOpacity);
        ellipse(this.cX+177, this.cY+287, 40, 100);//the actuall cacoon
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
    }
    display(){
        fill(57);
        rect(this.pos.x+163,this.pos.y+217,5,55);//antennas
        rect(this.pos.x+187,this.pos.y+217,5,55);
        fill(36,97,34);
        ellipse(this.pos.x+177,this.pos.y+287,60,80);
        ellipse(this.pos.x+137,this.pos.y+267,60,80);
         ellipse(this.pos.x+217,this.pos.y+267,60,80);
         ellipse(this.pos.x+137,this.pos.y+297,50,60);
        ellipse(this.pos.x+217,this.pos.y+297,50,60);
    }
 fly(){
     this.pos.add(this.vel);
 }
}
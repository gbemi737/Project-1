let fishX = 0;
let fishY = 0;
let bubblesize =0;

function setup(){
createCanvas(800,800);
frameRate(6);
}

function draw() {
oceanWorld();
}

function oceanWorld() {//the background for my ocean
background (77,131,242);
rectMode (CENTER);
noStroke ();
fill (173,117,73,180);
rect (400,700, width, 250,20);

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

}

function fishiEs(){//fish move around and make bubbles
fill (255,205,69);
triangle(fishX+0, fishY+0, fishX+0, fishY-30, fishX+30,fishY-15);
ellipse(fishX+40, fishY-15,40,30);
    fill(255,180);
push();
translate(fishX +70, fishY+ 25);
scale(bubblesize);
circle(fishX+5, fishY+5, 1);
circle(fishX+10, fishY+10, 3);
circle(fishX+15, fishY+15, 5);
pop();
}
var fixedSq;
var movingSq;
var fixedSq2;
var fixedSq3;
var fixedSq4;

function preload(){
    music=loadSound("music.mp3");
}

function setup() {
  createCanvas(800,400);
  movingSq=createSprite(400, 200, 50, 50);
  fixedSq=createSprite(400,200,50,50);
  fixedSq2=createSprite(500,200,50,50);
  fixedSq3=createSprite(600,200,50,50);
  fixedSq4=createSprite(700,200,50,50);


}

function draw() {
  background(255,255,255); 
  movingSq.y=mouseY;
  movingSq.x=mouseX;




  
  objectTouching(fixedSq, movingSq);
  objectTouching2(fixedSq2, movingSq);
  drawSprites();
}
console.log("fixed",fixed.x); console.log("moving",moving.x); console.log(moving.x-fixed.x)




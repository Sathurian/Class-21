var fixedRect, movingRect;
var GO1, GO2, GO3, GO4 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5
  movingRect.debug = true;
  GO1 = createSprite (100,100,50,50);
  GO1.shapeColor = "blue"

  GO2 = createSprite (200,100,50,50);
  GO2.shapeColor = "blue"

  GO3 = createSprite (300,100,50,50);
  GO3.shapeColor = "blue"

  GO4 = createSprite (400,100,50,50);
  GO4.shapeColor = "blue"

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if(isTouching(movingRect,GO1)) {
 movingRect.shapeColor = "red"
 GO1.shapeColor = "red"

 }else {
 movingRect.shapeColor = "blue"
 GO1.shapeColor = "blue"
 }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}


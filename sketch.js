var fixedRect, movingRect;
var Rect1, Rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);
  fixedRect.shapeColor = "aqua"
movingRect.shapeColor="aqua"

  Rect1 = createSprite(100, 600,80,50)
  Rect2 = createSprite(100,0,50,50)

  Rect1.shapeColor="indigo";
  Rect2.shapeColor = "lime";

  Rect1.velocityY = -2;
  Rect2.velocityY = 2;

}

function draw() {
  background(0);  

  if (Rect1.x - Rect2.x < Rect2.width/2 + Rect2.width/2
    && Rect2.x - Rect1.x < Rect2.width/2 + Rect1.width/2) {
      Rect1.velocityX = Rect1.velocityX * (-1);
  Rect2.velocityX = Rect2.velocityX * (-1);
}
if (Rect1.y - Rect2.y < Rect2.height/2 + Rect1.height/2
  && Rect2.y - Rect1.y < Rect2.height/2 + Rect1.height/2){
    Rect1.velocityY = Rect1.velocityY * (-1);
  Rect2.velocityY = Rect2.velocityY * (-1);
}


  movingRect.x=mouseX
  movingRect.y=mouseY
  console.log(movingRect.x - fixedRect.x)
  if(movingRect.x - fixedRect.x < movingRect.width/2 +fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 +fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height/2&&
    movingRect.y - fixedRect.y <movingRect.height/2 +fixedRect.height/2){
    fixedRect.shapeColor = "crimson"
    movingRect.shapeColor="crimson"
  }
  else{
    fixedRect.shapeColor = "aqua"
movingRect.shapeColor="aqua"
  }
  drawSprites();
}
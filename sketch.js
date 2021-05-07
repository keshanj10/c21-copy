var fixedRect, movingRect, ob1, ob2, ob3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  ob1 = createSprite(200, 400, 50, 80)
  ob1.shapeColor = "green"
  ob1.debug = true 
  ob2 = createSprite(800, 400, 50, 80)
  ob2.shapeColor = "green"
  ob2.debug = true 
  ob3 = createSprite(1000, 400, 50, 80)
  ob3.shapeColor = "green"
  ob3.debug = true 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,ob3))
 {
  movingRect.shapeColor = "white"; 
  ob3.shapeColor = "white";
 }
else if(isTouching(movingRect,ob2))
 {
  movingRect.shapeColor = "white"; 
  ob2.shapeColor = "white";
 }
 else if(isTouching(movingRect,ob1))
 {
  movingRect.shapeColor = "white"; 
  ob1.shapeColor = "white";
 }
 else if(isTouching(movingRect,fixedRect))
 {
  movingRect.shapeColor = "white"; 
  fixedRect.shapeColor = "white";
 }
 else{
  movingRect.shapeColor = "green"; 
  ob3.shapeColor = "green";
  ob2.shapeColor = "green";
  ob1.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  drawSprites();
}


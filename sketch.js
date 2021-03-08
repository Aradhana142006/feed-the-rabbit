var garden,rabbit,apples,redl,orangel ;
var gardenImg,rabbitImg,appleImg,redImg,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  redImg=loadImage("redImage.png");
  orangeImg=loadImage("orangeLeaf.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityY= -3;
  
  
  

  





}
function draw() {
  background(0);
  
  //boy moving on Xaxis with mouse
rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();




  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  

}
}
function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangel = createSprite(random(50, 350),40, 10, 10);
orangel.addImage(orangeImg);
orangel.scale=0.08;
orangel.velocityY = 3;
orangel.lifetime = 150;
}

function createRed() {
redl = createSprite(random(50, 350),40, 10, 10);
redl.addImage(redImg);
redl.scale=0.06;
  redl.velocityY = 3;
  redl.lifetime = 150;
}








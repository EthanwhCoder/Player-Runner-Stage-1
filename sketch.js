


function preload(){
bgImage = loadImage("BG.jpeg")
}

function setup(){
  createCanvas(1000, 600);

  Bground = createSprite(500,300);
  Bground.addImage("ground",bgImage);
  Bground.velocityX = -2;

}

function draw(){
  background(0)
  console.log(Bground.x)
  if(Bground.x <400){
    Bground.x = 300;
  }


  drawSprites();
}
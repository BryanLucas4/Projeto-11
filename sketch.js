
var boat
var sea
var boatanimation
 
function preload(){
  boatanimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaImg = loadImage("sea.png")
}


function setup(){
  createCanvas(600,600);

  sea = createSprite(300,400)
 sea.addImage("mar",seaImg);
 sea.scale = 0.5
 
 boat = createSprite(200,380,20,50);
 boat.addAnimation("barco",boatanimation);
 boat.scale = 0.5;
 boat.velocityX = 0
 

}





function draw() {
  background("blue");
  sea.velocityX = - 1
    
    if (sea.x < 0){

      sea.x = sea.width/4;}
      
    drawSprites();
}

  var sea;
  var ship_move;

  function preload(){
  seaImage = loadImage("sea.png");
  ship_move = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

  function setup(){
  createCanvas(600,600);
  sea = createSprite(100,100,3,30);
  sea.addAnimation("sea",seaImage);
  sea.x = sea.width/2;
  

  ship = createSprite(180,200,10,5);
  ship.addAnimation("move",ship_move);
  ship.scale = 0.4;
}

   function draw() {
    background("blue");

   sea.velocityX = -6;

    if(sea.X<0){
     sea.x = sea.width/2;


   }









 drawSprites();
}
var bullet,wall;
var speed,weight;
var thickness;
var engine, world;
function setup() {
  createCanvas(1600,400);
    engine = engine.create();
    world = engine.world;
    thickness = random(22,83);
    weight = random(400,1500)
    wall= createSprite(1500, 200, thickness, height/2);
    speed = random(55,90);

  weight = random(400,1500)
  wall= createSprite(1500, 200, 60, height/2);
  wall.shapeColor= "Blue"
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  if(wall.x-car.x<(car.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
   if (deformation>180){
    bullet.shapeColor=color(255,0,0);
  
   } 
   if(deformation<180 && deformation>100){
      
   }
   if (deformation<100){
    bullet.shapeColor=color(0,255,0)
   }
  } 
  drawSprites();
}

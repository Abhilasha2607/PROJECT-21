var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  

   bullet = createSprite(50,200,50,50);
   bullet.shapeColor = "white";
   

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(230,230,230);
   

   thickness = random(22,80);

  speed = random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed;
}




function draw() {
  background(0);  
  
 if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
 var damage = 0.5 * speed*speed*weight/(thickness*thickness*thickness);
 if (damage > 10){
   wall.shapeColor = color ( 255,0,0);
 }
 if(damage< 10){
   wall.shapeColor = color ( 0,255,0);
 }
 }


  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightedge = bullet.x + bullet.width;
  wallLeftedge = wall.x;
  if(bulletRightedge >= wallLeftedge ){
    return true;
  }
  return false;
}
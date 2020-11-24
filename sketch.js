var wall, thickness 
var bullets, speed, weight

function setup() {
  createCanvas(1600,400);
  speed = random (220, 320)
  weight = random (30, 50)
  thickness = random(20, 85)
  bullet = createSprite (50, 200, 50, 5)
  bullet.velocityX = speed
  bullet.shapeColor = "white"
  wall = createSprite (1200, 200,  thickness, height/2)
  wall.shapeColor = "grey"
}

function draw() {
  background(0);  
  
  if(hasCollided (bullet, wall)){
    bullet.velocityX = 0;
    var Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(Damage > 10){
      wall.shapeColor = ("red")
    }
    
    if(Damage < 10){
      wall.shapeColor = ("green")
    }
  

  }
drawSprites();

}

function hasCollided(bullet, wall){
  bulletrightEdge = bullet.x + bullet.width 
  wallleftEdge = wall.x
  if(bulletrightEdge >= wallleftEdge){
    return true
  
  }
  else {
    return false
  }
}
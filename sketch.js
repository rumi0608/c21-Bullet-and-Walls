 var Bullet,speed,weight;
 var wall,thickness;

function setup() {
  createCanvas(1600,400);
  //
  Bullet = createSprite(50, 200, 50, 50);
  Bullet.shapeColor = "black";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  //
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  //
  Bullet.velocityX = 5;

}


function hasCollided(lbullet , lwall){
  BulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (BulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}

function draw() {

  if ( wall.x - Bullet.x < ( Bullet.width + wall.width)/2)
  {
    Bullet.velocityX = 2;

    var deformation = 0.5 * weight * speed * speed /22500;
    if(deformation>180)
    {
      Bullet.shapeColor = "white";
    }
      if (deformation<180 && deformation>100)
      {
        Bullet.shapeColor = "white";
      }
    if (deformation<100)
    {
      Bullet.shapeColor = "white";
    }
  }

  if (hasCollided(Bullet , wall)){

    Bullet.velocityX = 2;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
    if(damage>10){
      wall.shapeColor = "red";
    }
    if (damage<10){
      wall.shapeColor = "green";
    }
  }
  background(255,255,255);  
  drawSprites();
}
 



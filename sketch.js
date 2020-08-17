var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);          //random speed for random deformation of car
  weight=random(400,1500);      //random weight for random deformation of car


  car=createSprite(50,200,50,50);
  wall=createSprite(1400,200,60,200);
 
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;    //giving random speed to the car
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x< wall.width/2+car.width/2 )       // collision detection
    {
      car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22509;    //deformation formula storing in an variable
   
   if(deformation>180){                             //more the defomation more the danger for pasenger "the red color indicate high deformatiion rate"
      car.shapeColor=color(255,0,0);
   }

  if(deformation<180 && deformation>100)      // moderate amount of deformation "the yellow color indicate moderate deformatiion rate"
    car.shapeColor=color(230,230,0);
}
  if (deformation<100){                    //least amount of deformation  "the green color indicate low deformatiion rate"
    car.shapeColor=color(0,255,0);
  }

  drawSprites();
}

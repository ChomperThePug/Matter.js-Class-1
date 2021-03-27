const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var ball, ground;

function setup() {
    createCanvas(500, 500);
   engine = Engine.create();
   world = engine.world;
  
   var circlO = {
       restitution : 1.0
   };

   ball = Bodies.circle(250,20,20,circlO);

   var groundO = {
       isStatic : true
   };

   ground = Bodies.rectangle(250,500,50,50,groundO);

   World.add(world, ground);
   World.add(world, ball);
}

function draw() {
    background(0);
   Engine.update(engine);
   rectMode(CENTER);
   rect(ground.position.x, ground.position.y, 500, 50);
   ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y, 20);
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundobj,left,right;
var forcebt;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);

    
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic : false,
		resisitution : 0.3,
		friction:0,
		density : 1.2
	}

	//Create the Bodies Here.
    ball = Bodies.circle(150,100,20,ball_options);
    World.add(world,ball);
	
    
    groundobj = new Ground(300,400,width,20);
	left = new Ground(350,400,15,150);
	right = new Ground(500,400,15,150);

    forcebt = createImg("forcebt.png");
	forcebt.position(400,50);
	forcebt.size(75,75);
    forcebt.mouseClicked(hvforce);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(51);
  
  groundobj.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

  drawSprites();
 
}

function hvforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-10});
}


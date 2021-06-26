
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(200,67,116,40);
	roof2 = new Roof(300,67,116,40);
	roof3 = new Roof(400,67,116,40);
	roof4 = new Roof(500,67,116,40);
	roof5 = new Roof(600,67,116,40);

	bobObject1 = new Bob(200,490,100);
	bobObject2 = new Bob(300,490,100);
	bobObject3 = new Bob(400,490,100);
	bobObject4 = new Bob(500,490,100);
	bobObject5 = new Bob(600,490,100);
	rope1 = new Rope(bobObject1.body, roof1.body,);
	rope2 = new Rope(bobObject2.body, roof2.body);
	rope3 = new Rope(bobObject3.body, roof3.body);
	rope4 = new Rope(bobObject4.body, roof4.body);
	rope5 = new Rope(bobObject5.body, roof5.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240,240,255);
  Engine.update(engine);

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:500})  
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var world,engine
var roof
function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof()
	bob1= new Bob(150,400)
	bob2= new Bob(200,400)
	bob3= new Bob(250,400)
	bob4= new Bob(300,400)
	bob5= new Bob(350,400)
	//bob6= new Bob(350,400)
	//bob5= new Bob(100,400)
	rope1= new Rope(bob1.body,roof.body,-100)
	rope2= new Rope(bob2.body,roof.body,-50)
	rope3= new Rope(bob3.body,roof.body,0)
	rope4= new Rope(bob4.body,roof.body,50)
	rope5= new Rope(bob5.body,roof.body,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:-50})
	}
	if(keyCode===SPACE)
	{
		Matter.Body.applyForce(bob1.body,bob2.body,bob1.body.position,{x:-50,y:-50},bob2.body.position,{x:-50,y:-50})
	}
}



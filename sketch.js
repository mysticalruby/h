
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var connect;
var connect2;
var connect3;
var connect4;
var connect5;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	connect = Matter.Constraint.create({
		bodyA:bob1,
		pointA:{x:0,y:0},
		bodyB:rope1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.01
	 
	  })
	  World.add(world,connect);
	  connect2 = Matter.Constraint.create({
		bodyA:bob2,
		pointA:{x:0,y:0},
		bodyB:rope2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.01
	 
	  })
	  World.add(world,connect2);
  
	  connect3 = Matter.Constraint.create({
		bodyA:bob3,
		pointA:{x:0,y:0},
		bodyB:rope3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.01
	 
	  })
	  World.add(world,connect3);
	  connect4 = Matter.Constraint.create({
		bodyA:bob4,
		pointA:{x:0,y:0},
		bodyB:rope4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.01
	 
	  })
	  World.add(world,connect4);
      connect5 = Matter.Constraint.create({
		bodyA:bob5,
		pointA:{x:0,y:0},
		bodyB:rope5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.01
	 
	  })
	  World.add(world,connect5);

	}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();
}


//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new rooof(400, 100, 600, 20);

	bob1 = new bob(300, 500, 25);
	bob2 = new bob(350, 500, 25);
	bob3 = new bob(400, 500, 25);
	bob4 = new bob(450, 500, 25);
	bob5 = new bob(500, 500, 25);

	rope1 = new rope(bob1.body, roof.body, -50*2, 0);
	rope2 = new rope(bob2.body, roof.body, -50*1, 0);
	rope3 = new rope(bob3.body, roof.body, 0, 0);
	rope4 = new rope(bob4.body, roof.body, 50*1, 0);
	rope5 = new rope(bob5.body, roof.body, 50*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-80, y:0});
	}
}


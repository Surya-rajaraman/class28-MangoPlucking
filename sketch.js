
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stone, groundObject, launcherObject;
var mango1;
var m2, m3, m4, m5, m6;
var world,boy;
var slingshot;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,60);
	m2=new mango(1100,200,60);
	m3=new mango(1200,200,60);
	m4=new mango(1000,200,60);
	m5=new mango(900,190,60);
	m6=new mango(1000,80,60);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(225,410,20);
	slingshot=new SlingShot(stone.body,{x:225,y:410})

	Engine.run(engine);

}

function draw() {

  background(230);

  Engine.update(engine);
  //Add code for displaying text here!
  groundObject.display();
  image(boy,200,340,200,300);
  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stone.display();
  slingshot.display();

detectcollision(stone,mango1)
detectcollision(stone,m2)
detectcollision(stone,m3)
detectcollision(stone,m4)
detectcollision(stone,m5)
detectcollision(stone,m6)

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode=== 32)
    {
		Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
       slingshot.attach(stone.body)
    }
}

function detectcollision(lstone,lmango)
{
	mbp = lmango.body.position;
	sbp = lstone.body.position;
	var distance = dist(sbp.x, sbp.y, mbp.x, mbp.y)

	if(distance<=lmango.r+lstone.r)		
	{
		
		Matter.Body.setStatic(lmango.body, false);
	}
}

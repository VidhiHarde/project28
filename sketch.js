
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,25);
	mango2=new mango(1000,100,25);
	mango3=new mango(1100,200,30);
	mango4=new mango(1000,200,33);
	mango5=new mango(1200,200,30);
	mango6=new mango(910,220,25);
	mango7=new mango(1080,30,25);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(230,400,45,45);
	slingshot=new Slingshot(stoneObj.body,{x:240,y:410});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  Engine.update(engine);


  strokeWeight(4);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneObj.display();
  groundObject.display();
  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly();
}

   
    

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var paperObject,ground,bin,bin2,bin3;
var ground2
var binImage,Imagebin;

function preload(){
  Imagebin = loadImage("Images/dustbingreen.png")
}

function setup() {
  createCanvas(1200, 600);
 // binImage = createSprite(1000,490,240,120)
 // binImage.addImage("abc",Imagebin);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject = new Paper(100,520,60,60);
    ground = new Ground(600,560,1200,15);
    //ground2 = new Ground(1210,300,10,600)
    ground2 = new Baseclass(1000,490,240,120);
    bin = new Bin(1000,550,240,10);
    bin2 = new Bin(885,490,10,120)
    bin3 = new Bin(1114,490,10,120)
    

  Engine.run(engine);
  
  
}

function draw() {
 
  background("lavender");
  
  
  paperObject.display();
  ground.display();
  //binImage.display();
  bin.display();
  bin2.display();
  bin3.display();
  imageMode(CENTER);
  image (Imagebin,1000,490,240,120);
  ground2.display();
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:250,y:-250});
  }
  }

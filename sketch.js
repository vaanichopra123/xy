
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var matki

function preload(){
  bg_img = loadImage("bg.jpg");
  matkiImg = loadAnimation("matki.png");
}

function setup() {
  createCanvas(1800,600);

  engine = Engine.create();
  world = engine.world;

  //matki = Matter.Body.create(200,200);
 // matki = createSprite(200,200);
  matki = new Matki(1200,200,50,50);
  matki.addAnimation('MATKI',matkiImg);
  
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  Engine.update(engine);
  drawSprites();
}


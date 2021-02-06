const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;

var ground;

var hero, fly;

var monster;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,  block11,  block12,  block13,  block14,  block15 ;

function preload() {

  bg = loadImage("images/GamingBackground.png");

}

function setup() {

  createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650, height - 60, width, 10);

  hero = new Hero(300, 400, 80);

  fly = new Fly(hero.body, {x : 350, y : 100});

  block1 = new Block(560, 515, 80, 40);
  block2 = new Block(720, 515, 80, 40);
  block3 = new Block(880, 515, 80, 40);

  block4 = new Block(560, 475, 80, 40);
  block5 = new Block(720, 475, 80, 40);
  block6 = new Block(880, 475, 80, 40);

  block7 = new Block(560, 435, 80, 40);
  block8 = new Block(720, 435, 80, 40);
  block9 = new Block(880, 435, 80, 40);

  block10 = new Block(560, 395, 80, 40);
  block11 = new Block(720, 395, 80, 40);
  block12 = new Block(880, 395, 80, 40);

  block13 = new Block(560, 355, 80, 40);
  block14 = new Block(720, 355, 80, 40);
  block15 = new Block(880, 355, 80, 40);
  

  monster = new Monster(1100, 440, 60);

}

function draw() {

  background(bg);

  Engine.update(engine);

  ground.display();

  hero.display();

  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  monster.display();
}

function mouseDragged(){

    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}

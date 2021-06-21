const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup()
{
  createCanvas(490, 800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  for(var j = 15; j <=width; j = j + 30)
  {
    plinkos.push(new Plinko(j, 45, 5, 5));
  }

  for(var j = 30; j <=width; j = j + 30)
  {
    plinkos.push(new Plinko(j, 75, 5, 5));
  }

  for(var j = 15; j <=width - 10; j = j + 30)
  {
    plinkos.push(new Plinko(j, 105, 5, 5));
  }

  for(var j = 30; j <=width; j = j + 30)
  {
    plinkos.push(new Plinko(j, 135, 5, 5));
  }

  for(var j = 15; j <=width; j = j + 30)
  {
    plinkos.push(new Plinko(j, 165, 5, 5));
  }
  ground = new Ground(240, 790, 480, 10);

  for(var k = 5; k <=width; k = k + 80)
  {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  for(var l = 0; l < plinkos.length; l++)
  {
    plinkos[l].display();
  }

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(20, 450), 10, 10));
    console.log(frameCount);
  }

  for(var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }

  drawSprites();
}
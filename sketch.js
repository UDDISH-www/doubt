const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraints = Matter.MouseConstraints;

var back,platform;

function preload() {
  back=loadImage("image/GamingBackground.png");

//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  platform =new Ground.js(150, 305, 300, 170);
}

function draw() {
  background(back);
 
  
    Engine.update(engine);
    platform.display();
}


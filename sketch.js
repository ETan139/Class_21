var ground1
//var ground2
var ball
var button1,button2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine= Engine.create()
world= engine.world
button1=createImg("rightarrow.png")
button1.position(220,30)
button1.size(50,50)
button1.mouseClicked(hForce)
button2=createImg("Uparrow.png")
button2.position(20,30)
button2.size(50,50)
button2.mouseClicked(mForce)


ground1=new Ground(200,390,400,20)
ball=new Ball(200,40,20)
//ground2=new Ground(300,290,400,20)
}

function draw() 
{
  background(51);
  Engine.update(engine)
 
 ground1.display()
 ball.display()
 //ground2.display()
}
function hForce(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:0})
}
function mForce(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.05})
  }


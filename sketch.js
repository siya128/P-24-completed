const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,580,1200,20)
    hammer = new Hammer(10,100);
    rubberball = new Rubber(600,300,50)
  stone = new Stone(100,10)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberball.display();
    stone.display();
 
}
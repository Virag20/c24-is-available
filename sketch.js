const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig,pig1;
var log,log1;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig = new Pig(810,350);
    log = new Log(810,260,300,PI/2);   
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig1 = new Pig(810,220);

    log1 = new Log(810,180,300,PI/2);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    bird.display();}
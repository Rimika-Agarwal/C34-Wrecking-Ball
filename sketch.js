const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20);

    b1 = new Block(600,100)
    b2 = new Block(600,100)
    b3 = new Block(600,100)
    b4 = new Block(600,100)
    b5 = new Block(600,100)

    b11 = new Block(500,100)
    b12 = new Block(500,100)
    b13 = new Block(500,100)
    b14 = new Block(500,100)
    b15 = new Block(500,100)
    b16 = new Block(500,100)

    ball = new Ball(400,250)

    slingshot = new Slingshot(ball.body, {x:400, y:10})

   
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    
    ground.display();

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()

    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    
    ball.display()

    slingshot.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY})
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1, pig2, pig3, ground;
var box1;
var BgImg = loadImage("Sprites/bg1.png");
var platform, Joey, slingshot, score;

var gameState = "onSling"






function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;




  ground = new Ground(600,height,1200,20);

  platform = new Ground(150, 305, 300, 170);

  Joey = new Bird(200,50);

  slingshot = new Sling(Joey.body, {x:200, y:50})

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pigs(810, 350);
  log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig3 = new Pigs(810, 220);

  log3 =  new Log(810,180,300, PI/2);

  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(870,120,150, -PI/7);




}

function draw() {
  

  if(BgImg){
    background(BgImg);


    noStroke();
    textSize(35);
    fill("white")
    text("Score" + score, width-300, 50);
  }

    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

    
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();


   

    bird.display(gameState);
    platform.display();
    slingshot.display(); 

}

function mouseDragged(){

    if(gameState != "launched"){

      Matter.Body.setPosition(Joey.body, {x:mouseX, y: mouseY})
    }
}

function mouseReleased(){

  slingshot.fly();
  gameState = "launched"
}


function keyPressed(){

  if(keyCode === 32 && bird.body.speed < 1 && gameState === "launched"){

    Joey.trajectory = [];
    Matter.Body.setPosition(Joey.body, {x: 200, y:50})

    slingshot.attach(Joey.body);
    gameState = "non-launched"

  }


}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var egg1, nest1, gameState = "Start";
var chain;

function preload(){
  backgroundImage = loadImage("images/background.png");
  boyImage = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1200, 600);
  
  engine = Engine.create();
  world = engine.world;

  nest1 = new Nest(600, 370, 300);
  egg1 = new Egg(570, 300);
  egg2 = new Egg(600, 300);
  rock = new Rock(90, 400);
  nest2 = new Nest(1000, 300, 200);
  blackegg = new blackEgg(1000, 210);

  chain = new Chain(rock.body, {x: 90, y: 380});

  boy = createSprite(150, 450, 10, 10);
  boy.scale = 0.7;
  boy.addImage(boyImage);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(gameState == "Play"){
    
    drawSprites();

    nest1.display();
    egg1.display();
    egg2.display();
    nest2.display();
    rock.display();
    blackegg.display();

    if(egg1.body.position.y > 600 || egg2.body.position.y > 600 || rock.body.position.y > 600){
      gameState = "End";
    }

    if(blackegg.body.position.y > 600){
      gameState = "Win";
    }
  }

  if(gameState == "Start"){
    textSize(40);
    fill("Blue");
    text("Press space to play", 400, 100);
    textSize(25);
    text("Drag release the mouse to launch the rock", 350, 200);
    textSize(30);
    text("How to win:", 500, 300);
    textSize(20);
    text("Knock down the black egg", 450, 400);
    textSize(30);
    text("If you knock down the white eggs than you lose", 300, 500);

    if(keyDown("space")){
      gameState = "Play";
    }
  }  


  if(gameState == "End"){
    background(0, 0, 0);
    textSize(50);
    fill("red");
    text("Game Over", 470, 300);
  }

  if(gameState == "Win"){
    background(0, 0, 0);
    textSize(50);
    fill("green");
    text("You Win!", 450, 300);
  }

  //chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  if(gameState == "Play"){
    chain.fly();
  }
}
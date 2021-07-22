var k, kStanding, kMoving;
var kLobby,kLobbyimg
var playButton,playButtonIng;
var instruction,instructionImg;
var homeButton,homeImage;
var character1,ch1ing;
var character2,ch2img
var invisibleGround
var HOME = 1
var SELECTPLNO = 2
var SelectCh = 7
var STAGE = 3
var PLAY = 4
var RESET = 5
var INSTRUCTION = 6
var gameState = HOME


function preload(){
  kMoving = loadAnimation("1front1.jpg","2k_stand.jpg","3front3.jpg");
  kStanding = loadAnimation("2k_stand.jpg");
  playButtonIng = loadAnimation('PlayButton.jpg')
  instructionImg = loadAnimation('instruction.jpg')
  homeImage = loadAnimation('homeButton.jpg')
  kLobbyimg = loadAnimation('kStandLobby.jpg')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  k = createSprite(windowWidth/20,windowWidth/3+100,30,50);k.scale=0.3;k.addAnimation('kStanding',kStanding)
  //k.debug = true;
  moveWithArrow(k);

  kLobby = createSprite( windowWidth/5,windowWidth/4);kLobby.addAnimation('kLobbyimg',kLobbyimg)

  instruction = createSprite(windowWidth/2,windowHeight/2+270);instruction.addAnimation('instruction',instructionImg)

  playButton = createSprite(windowWidth/2,windowHeight/2+200); playButton.addAnimation('playButton',playButtonIng)

  homeButton = createSprite(windowWidth/40,windowHeight/20);homeButton.addAnimation('homeImage',homeImage)

  invisibleGround = createSprite(100,600,10000,20);
  invisibleGround.debug = true

  
  
}

function draw() { 
  //background('black')
  background(rgb(0, 0, 0, 0.10))
  if(gameState===HOME){
    kLobby.visible = true
    k.scale = 1 
    k.x = windowWidth/5
    k.y =windowWidth/4
    k.visible = false;
    instruction.visible = true;
    playButton.visible = true;
    invisibleGround.visible = false
    if(mousePressedOver(playButton)){
      PlayPage();
      console.log("hi2")
    }
    if(mousePressedOver(instruction)){
      instructionPage();
      console.log("hi")
    }
  }

  if(gameState === INSTRUCTION){
    instruction.visible=false; 
    playButton.visible=false;
    invisibleGround.visible = false
    kLobby.visible = false

    if(mousePressedOver(homeButton)){
      HomePage();
      console.log("hi3")
    }
    textSize(50)
    fill('white')
    text('How To Play',windowWidth/3+100,windowHeight/10)
        
  }


  if(gameState===PLAY){

    if(mousePressedOver(homeButton)){
      HomePage();
      console.log("hi3") 
    }
    k.x = windowWidth/20
    k.y = windowWidth/3+80
    k.scale=0.3
    k.visible = true;
    invisibleGround.visible = true;
    kLobby.visible = false
    
  //  k.visible=true;
    k.velocityX=0;
    k.velocityY=0;
    AddGravity(k);
    instruction.visible=false;
    playButton.visible=false;
    k.bounceOff(invisibleGround);
    
  }
  
  drawSprites();
  
  invisibleGround.visible = false

  createEdgeSprites();
  
}

function instructionPage(){
  gameState = INSTRUCTION
  k.visible = false
  }


function HomePage(){
  gameState = HOME
  k.visible = false
}


function PlayPage(){
  gameState = PLAY
}

function moveWithArrow(sprite){
  if(keyDown("right")){
    sprite.velocityX=4.5
  }
  
  if(keyDown("UP_ARROW")){
    sprite.velocityY=-20
  }

  if(keyDown("SPACE")){
    sprite.velocityY=-20
  }
  

  
  if(keyDown("LEFT_ARROW")){
    sprite.velocityX=-4.5
  }
}

function AddGravity(sprite){
  sprite.velocityY = sprite.velocityY + 6
}
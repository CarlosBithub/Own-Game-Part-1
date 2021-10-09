
var gameState="tutorial"



var character,wall,wall2,prisonbackground,edges,laser1,laser2,end1,guard1,pressureplate,door

function preload(){
 prisonbackground=loadImage("Stonewall.jpg")
}

function setup() {
  createCanvas(700, 700);
  
  pressureplate=createSprite(496,518,70,70)
  pressureplate.shapeColor="yellow"
  
  character=createSprite(68,314,30,30)
  character.shapeColor="purple"
  
  
  
  door=createSprite(571,363,300,50)
  
  door.shapeColor="purple"
  
  laser1=createSprite(292,463,30,300)
  laser1.shapeColor="red"
  
  laser2=createSprite(440,316,30,300)
  laser2.shapeColor="red"
  
  wall=createSprite(347,211,800,90)
  //wall.shapeColor=rgb(6,9,9)
  
  wall2=createSprite(347,611,800,90);
  
  wall3=createSprite(150,358,50,310);
  
  guard1=createSprite(365,350,30,30)
  guard1.shapeColor="blue"
  guard1.velocityX=2
  
  
  end=createSprite(650,300,50,50)
  end.shapeColor="green"
  
  
  
  
  
  
  edges=createEdgeSprites()
  
  
  
  fill("red")
  text("Looks like Narwatal is in jail again and its your job to save him!", 106,81)
  
}

function draw() {
  background(prisonbackground);
  console.log(mouseX,mouseY)
  
  if(keyDown("left")){
    character.x=character.x-6
  }
  
  if(keyDown("right")){
    character.x=character.x+6
  }
  
  if(keyDown("down")){
    character.y=character.y+6
  }
  
  if(keyDown("up")){
    character.y=character.y-6
  }
  
  character.collide(wall);
  character.collide(wall2);
  character.collide(edges);
  character.collide(wall3)
  
  if(gameState==="tutorial"){
  textSize(25)
  fill("red")
  text("Looks like Narwatal is in jail again and its your job to help him!", 10,81)
    
  textSize(25)
  fill("red")
  text("Use your arrow keys to move Narwatal",10,121)
   
  textSize(25)
  fill("red") 
  text("Avoid Guards, Lasers and step on pressure plates.",10,151)
   
  guard1.bounceOff(laser2);
  guard1.bounceOff(laser1);
    
  if(character.isTouching(pressureplate)){
    door.destroy()
    
    pressureplate.destroy()
  }
  
        
    
  }
  
  drawSprites()
}